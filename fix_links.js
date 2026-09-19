const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app');

function getFiles(dir, ext, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      getFiles(path.join(dir, file), ext, fileList);
    } else if (file.endsWith(ext)) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const tsxFiles = getFiles(dir, '.tsx');

const pathMap = {
  'home': '/',
  'care': '/schedule',
  'passport': '/passport',
  'activity': '/activity',
  'emergency-countdown': '/sos-countdown',
  'schedule': '/schedule',
  'report': '/report'
};

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Find all <a ...> tags
  const aTagRegex = /<a\s([^>]*?)href="#"([^>]*?)>/g;
  
  if (content.match(aTagRegex)) {
    content = content.replace(aTagRegex, (match, before, after) => {
      // Find data-path
      const dataPathMatch = match.match(/data-path="([^"]+)"/);
      let href = '/';
      if (dataPathMatch && pathMap[dataPathMatch[1]]) {
        href = pathMap[dataPathMatch[1]];
      }
      return `<Link ${before}href="${href}"${after}>`;
    });
    // Replace closing tags
    content = content.replace(/<\/a>/g, '</Link>');
    
    // Add import if not exists
    if (!content.includes('import Link from')) {
      // Find the last import
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLine + 1) + 'import Link from "next/link";\n' + content.slice(endOfLine + 1);
      } else {
        content = 'import Link from "next/link";\n' + content;
      }
    }
    modified = true;
  }
  
  // Hardcoded fixes for specific buttons in page.tsx that might not have data-path
  if (file.endsWith('page.tsx')) {
     if (content.includes('data-path="passport"')) {
         // covered by above
     }
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed links in:', file);
  }
});
