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

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  // Replace <!-- comment --> with {/* comment */}
  if (content.includes('<!--')) {
    content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
    modified = true;
  }
  
  // also check for "class=" just in case
  if (content.match(/\sclass="/)) {
      content = content.replace(/\sclass="/g, ' className="');
      modified = true;
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed:', file);
  }
});
