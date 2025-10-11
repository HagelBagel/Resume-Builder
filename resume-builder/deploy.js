// deploy.js
import FTP from 'ftp';
import fs from 'fs';
import path from 'path';

const client = new FTP();

const config = {
  host: 'linux188.unoeuro.com',
  user: 'chfrom.dk', 
  password: 'hgtd2p6y',
  connTimeout: 60000,
  pasvTimeout: 60000
};

function uploadDir(localPath, remotePath) {
  return new Promise((resolve, reject) => {
    client.connect(config);
    
    client.on('ready', () => {
      console.log('Connected to FTP server');
      
      let uploadTasks = [];
      
      // Upload .htaccess first if it exists
      if (fs.existsSync('./.htaccess')) {
        uploadTasks.push(
          new Promise((resolveTask) => {
            client.put('./.htaccess', remotePath + '/.htaccess', (err) => {
              if (err) console.error('Error uploading .htaccess:', err);
              else console.log('✅ Uploaded: .htaccess');
              resolveTask();
            });
          })
        );
      }
      
      // Upload dist folder contents
      function uploadFolder(local, remote) {
        const items = fs.readdirSync(local);
        
        items.forEach(item => {
          const localItem = path.join(local, item);
          const remoteItem = remote + '/' + item;
          
          if (fs.statSync(localItem).isDirectory()) {
            uploadTasks.push(
              new Promise((resolveTask) => {
                client.mkdir(remoteItem, true, (err) => {
                  if (!err) {
                    uploadFolder(localItem, remoteItem);
                  }
                  resolveTask();
                });
              })
            );
          } else {
            uploadTasks.push(
              new Promise((resolveTask) => {
                client.put(localItem, remoteItem, (err) => {
                  if (err) console.error(`Error uploading ${item}:`, err);
                  else console.log(`✅ Uploaded: ${item}`);
                  resolveTask();
                });
              })
            );
          }
        });
      }
      
      uploadFolder(localPath, remotePath);
      
      // Wait a bit then close connection
      setTimeout(() => {
        client.end();
        resolve();
      }, 3000);
    });
    
    client.on('error', reject);
  });
}

// Run deployment
uploadDir('./dist', '/public_html/apps/resume-builder')
  .then(() => console.log('🎉 Deployment complete!'))
  .catch(err => console.error('❌ Deployment failed:', err));