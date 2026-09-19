const fs = require('fs');
const path = require('path');

const hexMap = {
  // Common mappings
  'faf8ff': 'background',
  '131b2e': 'foreground',
  '2a14b4': 'primary',
  'eaedff': 'primary-light',
  '505f76': 'muted-foreground',
  '0f172a': 'slate-900',
  'ba1a1a': 'destructive',
  'f2f3ff': 'card',
  'e2e7ff': 'primary-muted',
  'e3dfff': 'secondary',
  '4338ca': 'indigo-700',
  '464554': 'border',
  '141b2b': 'card-foreground',
  '92400e': 'warning-foreground',
  'f8f9fa': 'muted',
  'd0e1fb': 'accent',
  'b9100b': 'destructive-hover',
  'fde68a': 'warning',
  'ffdad6': 'destructive-light',
};

let nextColorIdx = 1;
const colorToVar = {};

function getVarName(hex) {
  if (hexMap[hex]) return hexMap[hex];
  if (colorToVar[hex]) return colorToVar[hex];
  
  const varName = `color-${hex}`;
  colorToVar[hex] = varName;
  return varName;
}

function refactorColors(dir) {
  const filePaths = getFiles(dir, '.tsx');
  const classRegex = /(bg|text|border|shadow|fill|stroke|ring)-\[#([0-9a-fA-F]{3,6})\]/g;
  
  const uniqueHexes = new Set();

  // First pass: collect all
  filePaths.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    let match;
    while ((match = classRegex.exec(content)) !== null) {
      uniqueHexes.add(match[2].toLowerCase());
    }
  });

  // Assign variables
  uniqueHexes.forEach(hex => {
    getVarName(hex);
  });

  // Second pass: replace
  filePaths.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    content = content.replace(classRegex, (match, prefix, hex) => {
      modified = true;
      const varName = getVarName(hex.toLowerCase());
      return `${prefix}-${varName}`;
    });

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  });

  // Update globals.css
  updateGlobalsCss();
}

function updateGlobalsCss() {
  const cssPath = path.join(__dirname, 'src', 'app', 'globals.css');
  let rootVars = '';
  let darkVars = '';
  let themeVars = '';

  const allVars = { ...hexMap, ...colorToVar };

  Object.entries(allVars).forEach(([hex, name]) => {
    rootVars += `  --${name}: #${hex};\n`;
    
    // Naive dark mode inversion for primary background/foreground
    let darkHex = hex;
    if (name === 'background') darkHex = '131b2e';
    else if (name === 'foreground') darkHex = 'faf8ff';
    else if (name === 'card') darkHex = '141b2b';
    else if (name === 'card-foreground') darkHex = 'e2e8f0';
    else if (name === 'muted') darkHex = '283044';
    else if (name === 'muted-foreground') darkHex = 'b7c8e1';
    
    darkVars += `    --${name}: #${darkHex};\n`;
    themeVars += `  --color-${name}: var(--${name});\n`;
  });

  const newCss = `@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

:root {
${rootVars}}

.dark {
${darkVars}}

@theme inline {
${themeVars}
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
}
`;

  fs.writeFileSync(cssPath, newCss, 'utf8');
  console.log('Updated globals.css');
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

refactorColors(path.join(__dirname, 'src', 'app'));
