const fs = require('fs');
const path = require('path');

const projectSrc = path.join(__dirname, 'src');
const htmlSourceBase = 's:\\HandsOFF\\handsoff_safety_command_center_clean_variant\\stitch_handsoff_care_passport_system';

const routes = {
  'handsoff_activity_caregiver_log': 'app/activity/page.tsx',
  'handsoff_care_passport_qr_clean_variant': 'app/passport/page.tsx',
  'handsoff_daily_care_schedule': 'app/schedule/page.tsx',
  'handsoff_doctor_visit_report': 'app/report/page.tsx',
  'handsoff_emergency_sos_countdown': 'app/sos-countdown/page.tsx',
  'handsoff_safety_command_center_clean_variant': 'app/page.tsx'
};

const colors = { "surface-container": "#eaedff", "outline-variant": "#c7c4d7", "error-container": "#ffdad6", "surface-variant": "#dae2fd", "on-primary": "#ffffff", "surface-bright": "#faf8ff", "on-tertiary-fixed-variant": "#763300", "on-secondary": "#ffffff", "on-surface": "#131b2e", "on-primary-fixed-variant": "#372abf", "error": "#ba1a1a", "on-primary-container": "#c1beff", "on-secondary-fixed-variant": "#38485d", "inverse-primary": "#c3c0ff", "primary-fixed-dim": "#c3c0ff", "tertiary-container": "#873b00", "surface-container-high": "#e2e7ff", "inverse-on-surface": "#eef0ff", "on-background": "#131b2e", "on-surface-variant": "#464554", "inverse-surface": "#283044", "secondary": "#505f76", "surface": "#faf8ff", "primary": "#2a14b4", "tertiary-fixed": "#ffdbca", "on-tertiary-fixed": "#331200", "surface-container-highest": "#dae2fd", "primary-fixed": "#e3dfff", "outline": "#777586", "surface-container-low": "#f2f3ff", "secondary-fixed": "#d3e4fe", "on-secondary-container": "#54647a", "secondary-container": "#d0e1fb", "on-error-container": "#93000a", "tertiary-fixed-dim": "#ffb68e", "tertiary": "#632900", "background": "#faf8ff", "on-secondary-fixed": "#0b1c30", "on-primary-fixed": "#100069", "surface-dim": "#d2d9f4", "on-tertiary-container": "#ffb389", "surface-tint": "#5148d7", "secondary-fixed-dim": "#b7c8e1", "on-error": "#ffffff", "on-tertiary": "#ffffff", "surface-container-lowest": "#ffffff", "primary-container": "#4338ca", "brand-50": "#eef2ff", "brand-100": "#e0e7ff", "brand-600": "#4f46e5", "brand-700": "#4338ca", "clinical-amber": "#FEF3C7", "clinical-amberText": "#92400E", "clinical-amberDark": "#78350F", "clinical-sand": "#FFFBEB" };

const fonts = {
  "label-lg": ["14px", "20px", "0.01em", "600"],
  "body-sm": ["12px", "18px", "0em", "400"],
  "display-lg-mobile": ["32px", "38px", "-0.025em", "700"],
  "headline-sm": ["18px", "24px", "-0.01em", "600"],
  "display-lg": ["40px", "48px", "-0.03em", "700"],
  "headline-lg": ["28px", "36px", "-0.02em", "600"],
  "label-md": ["12px", "16px", "0.02em", "600"],
  "headline-md": ["22px", "28px", "-0.015em", "600"],
  "body-lg": ["16px", "26px", "-0.005em", "400"],
  "body-md": ["14px", "22px", "0em", "400"],
  "label-sm": ["11px", "14px", "0.03em", "500"]
};

// 1. Update globals.css
function updateGlobalsCss() {
  const cssPath = path.join(projectSrc, 'app', 'globals.css');
  let rootVars = '';
  let darkVars = '';
  let themeVars = '';

  Object.entries(colors).forEach(([name, hex]) => {
    rootVars += `  --${name}: ${hex};\n`;
    
    // Invert for dark mode (simplified)
    let darkHex = hex;
    if (name === 'background' || name === 'surface' || name === 'surface-bright') darkHex = '#131b2e';
    else if (name.startsWith('on-surface') || name === 'on-background') darkHex = '#faf8ff';
    else if (name === 'surface-container-lowest') darkHex = '#0f172a';
    else if (name === 'surface-container-low') darkHex = '#1e293b';
    
    darkVars += `    --${name}: ${darkHex};\n`;
    themeVars += `  --color-${name}: var(--${name});\n`;
  });

  // Fonts
  Object.entries(fonts).forEach(([name, [size, lh, ls, fw]]) => {
    themeVars += `  --text-${name}: ${size};\n`;
    themeVars += `  --text-${name}--line-height: ${lh};\n`;
    themeVars += `  --text-${name}--letter-spacing: ${ls};\n`;
    themeVars += `  --text-${name}--font-weight: ${fw};\n`;
    // Register the font utilities in Tailwind v4 syntax
    themeVars += `  --font-${name}: var(--font-plus-jakarta-sans);\n`;
  });

  const newCss = `@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

:root {
${rootVars}}

.dark {
${darkVars}}

@theme inline {
${themeVars}
  --font-sans: var(--font-plus-jakarta-sans);
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  
  --spacing-space-xs: 0.25rem;
  --spacing-space-sm: 0.5rem;
  --spacing-space-md: 1rem;
  --spacing-space-lg: 1.5rem;
  --spacing-space-xl: 2.25rem;
  --spacing-margin: 1rem;
  --spacing-margin-tablet: 2rem;
  --spacing-margin-desktop: 3rem;
  --spacing-gutter: 1.25rem;
  --spacing-gutter-desktop: 1.5rem;
}

body {
  background: var(--background);
  color: var(--on-surface);
  font-family: var(--font-sans), sans-serif;
}

@layer base{html,body{width:100%;min-height:100%;margin:0;padding:0;}body{overscroll-behavior-y:none;}.pb-safe{padding-bottom:env(safe-area-inset-bottom,16px);}.pt-safe{padding-top:env(safe-area-inset-top,12px);}main>:first-child{margin-top:0!important;}main>:last-child{margin-bottom:0!important;}}::-webkit-scrollbar{display:none;}
`;
  fs.writeFileSync(cssPath, newCss, 'utf8');
}

// 2. Parse HTML and convert to TSX
function convertHtmlToTsx(html) {
  // Extract main content
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) return null;
  let mainContent = mainMatch[1];
  
  // Convert class to className
  mainContent = mainContent.replace(/class=/g, 'className=');
  // Self close tags
  mainContent = mainContent.replace(/<img([^>]*)>/g, '<img$1 />');
  mainContent = mainContent.replace(/<input([^>]*)>/g, '<input$1 />');
  mainContent = mainContent.replace(/<br>/g, '<br />');
  mainContent = mainContent.replace(/<hr>/g, '<hr />');
  // Replace style strings with objects
  mainContent = mainContent.replace(/style="([^"]*)"/g, (match, p1) => {
    if (p1.includes("font-variation-settings: 'FILL' 1;")) {
      return `style={{ fontVariationSettings: "'FILL' 1" }}`;
    }
    return `style={{}}`;
  });
  // Replace inline onclicks
  mainContent = mainContent.replace(/onclick="[^"]*"/g, 'onClick={() => {}}');
  // Replace for attribute
  mainContent = mainContent.replace(/for=/g, 'htmlFor=');
  // Replace xmlns:xlink
  mainContent = mainContent.replace(/xmlns:xlink=/g, 'xmlnsXlink=');
  
  // Remove script blocks
  mainContent = mainContent.replace(/<script[\s\S]*?<\/script>/g, '');
  
  return `export default function Page() {\n  return (\n    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">\n      ${mainContent}\n    </main>\n  );\n}\n`;
}

// 3. Process each route
function processRoutes() {
  let headerHtml = '';
  let navHtml = '';

  for (const [folder, targetPath] of Object.entries(routes)) {
    const htmlFile = path.join(htmlSourceBase, folder, 'code.html');
    if (fs.existsSync(htmlFile)) {
      const html = fs.readFileSync(htmlFile, 'utf8');
      
      if (!headerHtml) {
        const hMatch = html.match(/<header[^>]*>([\s\S]*?)<\/header>/);
        if (hMatch) headerHtml = '<header' + hMatch[0].substring(7);
      }
      if (!navHtml) {
        const nMatch = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/);
        if (nMatch) navHtml = '<nav' + nMatch[0].substring(4);
      }

      const tsxContent = convertHtmlToTsx(html);
      if (tsxContent) {
        fs.writeFileSync(path.join(projectSrc, targetPath), tsxContent, 'utf8');
      }
    }
  }

  // Update layout.tsx
  const layoutPath = path.join(projectSrc, 'app', 'layout.tsx');
  if (fs.existsSync(layoutPath)) {
    let layout = fs.readFileSync(layoutPath, 'utf8');
    
    // Replace Inter with Plus Jakarta Sans
    layout = layout.replace('import { Inter } from "next/font/google";', 'import { Plus_Jakarta_Sans } from "next/font/google";');
    layout = layout.replace('const inter = Inter({ subsets: ["latin"] });', 'const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" });');
    layout = layout.replace('inter.className', 'plusJakartaSans.variable');
    
    // Insert Header and Nav
    if (headerHtml && navHtml) {
      headerHtml = headerHtml.replace(/class=/g, 'className=').replace(/style="[^"]*"/g, `style={{ fontVariationSettings: "'FILL' 1" }}`);
      navHtml = navHtml.replace(/class=/g, 'className=').replace(/style="[^"]*"/g, `style={{ fontVariationSettings: "'FILL' 1" }}`);
      
      const newBodyContent = `
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          ${headerHtml}
          {children}
          ${navHtml}
        </ThemeProvider>`;
      
      layout = layout.replace(/<ThemeProvider[\s\S]*?<\/ThemeProvider>/, newBodyContent);
    }
    
    fs.writeFileSync(layoutPath, layout, 'utf8');
  }
}

updateGlobalsCss();
processRoutes();
console.log('Migration completed successfully!');
