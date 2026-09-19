const fs = require('fs');
const path = require('path');

function findColors(dir) {
  const filePaths = getFiles(dir, '.tsx');
  const colors = {};
  const classRegex = /(bg|text|border|shadow)-\[#([0-9a-fA-F]{3,6})\]/g;

  filePaths.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = classRegex.exec(content)) !== null) {
      const hex = match[2].toLowerCase();
      colors[hex] = (colors[hex] || 0) + 1;
    }
  });

  console.log('Colors found sorted by count:');
  Object.entries(colors)
    .sort((a, b) => b[1] - a[1])
    .forEach(([c, count]) => console.log(`#${c}: ${count}`));
}

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

findColors(path.join(__dirname, 'src', 'app'));
