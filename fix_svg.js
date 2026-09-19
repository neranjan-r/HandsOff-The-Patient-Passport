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

const attributesToReplace = {
  'stroke-width=': 'strokeWidth=',
  'stroke-dasharray=': 'strokeDasharray=',
  'stroke-dashoffset=': 'strokeDashoffset=',
  'stroke-linecap=': 'strokeLinecap=',
  'stroke-linejoin=': 'strokeLinejoin=',
  'fill-rule=': 'fillRule=',
  'clip-rule=': 'clipRule=',
  'fill-opacity=': 'fillOpacity=',
  'stroke-miterlimit=': 'strokeMiterlimit=',
  'stop-color=': 'stopColor=',
  'stop-opacity=': 'stopOpacity='
};

tsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;

  for (const [dash, camel] of Object.entries(attributesToReplace)) {
    // case insensitive match in case some are uppercase? No, HTML is lowercase.
    // Use regex with global flag
    const regex = new RegExp(dash, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, camel);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed SVG attributes in:', file);
  }
});
