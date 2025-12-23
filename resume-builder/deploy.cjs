/* eslint-disable */
const FTP = require('ftp');
const fs = require('fs');
const path = require('path');

const client = new FTP();

// Load environment variables from .env file manually
const envPath = path.join(__dirname, '.env');
const envVars = {};

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) {
      envVars[key.trim()] = value.trim();
    }
  });
}

const config = {
  host: envVars.FTP_HOST || 'linux188.unoeuro.com',
  user: envVars.FTP_USER,
  password: envVars.FTP_PASSWORD,
  connTimeout: 60000,
  pasvTimeout: 60000
};

if (!config.user || !config.password) {
  console.error('❌ Missing FTP credentials. Please set FTP_USER and FTP_PASSWORD in .env file.');
  process.exit(1);
}

/**
 * Uploads a single file to the FTP server
 * @param {string} localPath - Absolute path to the local file to upload
 * @param {string} remotePath - Target path on the FTP server where file should be placed
 * @returns {Promise} Promise that resolves when upload completes successfully or rejects on error
 * 
 * How it works:
 * - Uses FTP client's put() method to transfer the file
 * - Wraps the callback-based FTP operation in a Promise for async/await compatibility
 * - Logs success/error messages with file basename for better user feedback
 */
async function uploadFile(localPath, remotePath) {
  return new Promise((resolve, reject) => {
    client.put(localPath, remotePath, (err) => {
      if (err) {
        console.error(`❌ Error uploading ${path.basename(localPath)}:`, err.message);
        reject(err);
      } else {
        console.log(`✅ Uploaded: ${path.basename(localPath)}`);
        resolve();
      }
    });
  });
}

/**
 * Creates a directory on the FTP server
 * @param {string} remotePath - Path of the directory to create on the FTP server
 * @returns {Promise} Promise that always resolves (doesn't reject on errors)
 * 
 * How it works:
 * - Uses FTP client's mkdir() with recursive flag (true) to create nested directories if needed
 * - Ignores error code 550 which means "directory already exists" - this is expected behavior
 * - Always resolves the promise even on errors to continue deployment process
 * - Logs errors for any other mkdir failures for debugging purposes
 */
async function createDir(remotePath) {
  return new Promise((resolve) => {
    client.mkdir(remotePath, true, (err) => {
      if (err && err.code !== 550) { // 550 = directory already exists
        console.error(`❌ Error creating directory ${remotePath}:`, err.message);
      }
      resolve();
    });
  });
}

/**
 * Recursively uploads an entire directory structure to the FTP server
 * @param {string} localDir - Absolute path to the local directory to upload
 * @param {string} remoteDir - Target directory path on the FTP server
 * @returns {Promise} Promise that resolves when all files and subdirectories are uploaded
 * 
 * How it works:
 * - Reads all items (files and folders) in the local directory using fs.readdirSync()
 * - For each item, constructs both local and remote paths
 * - Checks if item is a directory using fs.statSync().isDirectory()
 * - If directory: creates it on server with createDir(), then recursively calls itself
 * - If file: uploads it directly using uploadFile()
 * - Processes items sequentially (await) to avoid overwhelming the FTP server
 */
async function uploadDirectory(localDir, remoteDir) {
  const items = fs.readdirSync(localDir);
  
  for (const item of items) {
    const localPath = path.join(localDir, item);
    const remotePath = `${remoteDir}/${item}`;
    
    if (fs.statSync(localPath).isDirectory()) {
      await createDir(remotePath);
      await uploadDirectory(localPath, remotePath);
    } else {
      await uploadFile(localPath, remotePath);
    }
  }
}

/**
 * Main deployment function that orchestrates the entire FTP upload process
 * @returns {Promise} Promise that resolves when deployment succeeds or rejects on failure
 * 
 * How it works:
 * 1. Establishes FTP connection using the config object (credentials, timeouts)
 * 2. Sets up event listeners for 'ready' and 'error' events
 * 3. On successful connection ('ready' event):
 *    - Optionally uploads .htaccess file if it exists in project root
 *    - Uploads entire 'dist' directory (built Vue.js app) to server path
 *    - Closes FTP connection and resolves promise on success
 * 4. On connection failure ('error' event):
 *    - Logs error message and rejects promise
 * 5. Uses try-catch within ready handler to catch upload errors
 * 6. Always closes FTP connection (client.end()) whether successful or not
 */
async function deploy() {
  return new Promise((resolve, reject) => {
    client.connect(config);
    
    client.on('ready', async () => {
      console.log('🚀 Connected to FTP server');
      
      try {
        // Upload .htaccess if it exists
        const htaccessPath = path.resolve('.htaccess');
        if (fs.existsSync(htaccessPath)) {
          await uploadFile(htaccessPath, '/public_html/apps/resume-builder/.htaccess');
        }
        
        // Upload dist directory contents
        const distDir = path.resolve('dist');
        await uploadDirectory(distDir, '/public_html/apps/resume-builder');
        
        console.log('🎉 Deployment complete!');
        client.end();
        resolve();
      } catch (error) {
        console.error('❌ Deployment failed:', error);
        client.end();
        reject(error);
      }
    });
    
    client.on('error', (err) => {
      console.error('❌ FTP Connection failed:', err);
      reject(err);
    });
  });
}

// Run deployment
deploy().catch(console.error);