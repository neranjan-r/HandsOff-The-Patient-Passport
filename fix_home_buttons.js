const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(pageFile, 'utf8');

// Replace Care Passport button
content = content.replace(
  /<button className="([^"]*)" type="button">\s*<span className="([^"]*)">badge<\/span>\s*Care Passport<\/button>/g,
  '<Link href="/passport" className="$1"><span className="$2">badge</span> Care Passport</Link>'
);

// Replace Activity Log button
content = content.replace(
  /<button className="([^"]*)" type="button">\s*<span className="([^"]*)">ecg_heart<\/span>\s*Activity Log<\/button>/g,
  '<Link href="/activity" className="$1"><span className="$2">ecg_heart</span> Activity Log</Link>'
);

fs.writeFileSync(pageFile, content, 'utf8');
console.log('Fixed home page buttons');
