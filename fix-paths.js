#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of HTML files to process
const htmlFiles = [
  'index.html', 
  'about.html', 
  'contact.html', 
  'education.html', 
  'experience.html',
  'work.html',
  '404.html'
];

// Function to fix paths in an HTML file
function fixPaths(filePath) {
  console.log(`Processing ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute paths with relative paths
  content = content.replace(/href="\/([^\/])/g, 'href="./$1');
  content = content.replace(/src="\/([^\/])/g, 'src="./$1');
  content = content.replace(/href="\/_next/g, 'href="./_next');
  content = content.replace(/src="\/_next/g, 'src="./_next');
  content = content.replace(/href="https:\/\/akpandita\.github\.io\/_next/g, 'href="./_next');
  content = content.replace(/src="https:\/\/akpandita\.github\.io\/_next/g, 'src="./_next');
  
  // Fix references in scripts
  content = content.replace(/"href":"\\?\/favicon/g, '"href":"./favicon');
  content = content.replace(/"href":"\\?\/_next/g, '"href":"./_next');
  content = content.replace(/:HL\["\\?\/_next/g, ':HL["./_next');
  content = content.replace(/:HL\["https:\/\/akpandita\.github\.io\/_next/g, ':HL["./_next');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Completed ${filePath}`);
}

// Process all HTML files
htmlFiles.forEach(file => {
  const filePath = path.resolve(__dirname, file);
  if (fs.existsSync(filePath)) {
    fixPaths(filePath);
  } else {
    console.log(`Warning: ${file} not found.`);
  }
});

console.log('All HTML files processed successfully!');
