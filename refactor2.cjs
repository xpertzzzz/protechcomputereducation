const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === '__root.tsx' || file === 'admin.tsx' || file === 'login.tsx') continue;

  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Strip anything that looks like `export const Route = ...`
  // We'll extract the component name if it's there
  let componentName = null;
  const compMatch = content.match(/component:\s*([A-Za-z0-9_]+)/);
  if (compMatch) {
    componentName = compMatch[1];
  } else {
    // If we can't find `component: `, maybe it's just a default export already? No.
    // Let's guess the component name by finding `function X()`
    const funcMatch = content.match(/function\s+([A-Za-z0-9_]+)/);
    if (funcMatch) {
      componentName = funcMatch[1];
    }
  }

  // Remove the export const Route block entirely
  // Because the block can span multiple lines and have varying nested {}, it's tricky with Regex
  // So we just remove everything from `export const Route` to the first `function ` declaration
  content = content.replace(/export const Route = [\s\S]*?(?=function )/, '');

  if (componentName && !content.includes('export default')) {
    content += `\nexport default ${componentName};\n`;
  }

  // Also fix Link imports if any got mangled
  content = content.replace(/import { Link, } from "react-router-dom";/g, 'import { Link } from "react-router-dom";');
  
  fs.writeFileSync(filePath, content);
}
console.log('Done refactoring');
