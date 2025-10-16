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