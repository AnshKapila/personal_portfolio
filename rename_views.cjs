const fs = require('fs');
const path = require('path');

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
};

const appDir = './app';
if (fs.existsSync(appDir)) {
    walkDir(appDir, (filePath) => {
        if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
            let content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('/pages/')) {
                content = content.replace(/\/pages\//g, '/views/');
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated imports in ${filePath}`);
            }
        }
    });
}
