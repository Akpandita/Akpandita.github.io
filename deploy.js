const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Build the Next.js site
console.log('Building Next.js site...');
execSync('cd src && npm run build', { stdio: 'inherit' });

// Copy the built files to the root directory
console.log('Copying built files to root directory...');
const outDir = path.join(__dirname, 'src', 'out');
const rootDir = path.join(__dirname);

// Function to copy files recursively
function copyFolderSync(from, to) {
  // Create directory if it doesn't exist
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  // Copy each file
  fs.readdirSync(from).forEach(element => {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);

    if (fs.statSync(fromPath).isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else {
      copyFolderSync(fromPath, toPath);
    }
  });
}

// Copy all files from out directory to root
copyFolderSync(outDir, rootDir);

console.log('Done! The website is ready for GitHub Pages deployment.');
