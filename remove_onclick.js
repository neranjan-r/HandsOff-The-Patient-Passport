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
  if (content.includes('onClick={() => {}}')) {
    content = content.replace(/onClick=\{\(\) => \{\}\}/g, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed onClick in:', file);
  }
});
