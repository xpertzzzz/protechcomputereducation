const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(routesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace TanStack Link import with react-router-dom Link
  content = content.replace(/from "@tanstack\/react-router"/g, 'from "react-router-dom"');

  // Strip createFileRoute import
  content = content.replace(/createFileRoute,?\s*/g, '');
  content = content.replace(/import\s*{\s*}\s*from\s*"react-router-dom";?\n?/g, '');

  // Handle Route definition
  const routeMatch = content.match(/export const Route = createFileRoute\([^)]*\)\(\{(?:[\s\S]*?)component:\s*([A-Za-z0-9_]+),?(?:[\s\S]*?)\}\);/);
  
  if (routeMatch) {
    const componentName = routeMatch[1];
    content = content.replace(routeMatch[0], `export default ${componentName};`);
  } else {
    const simpleRouteMatch = content.match(/export const Route = createFileRoute\([^)]*\)\(\{[\s\S]*?component:\s*([A-Za-z0-9_]+)[\s\S]*?\}\)/);
    if (simpleRouteMatch) {
       content = content.replace(simpleRouteMatch[0], `export default ${simpleRouteMatch[1]};`);
    } else {
       // Just remove it if we can't find component (like __root.tsx)
       content = content.replace(/export const Route = createFileRoute[\s\S]*?(?=function )/, '');
    }
  }

  // Remove useRouter, HeadContent, Scripts
  content = content.replace(/useRouter,?\s*/g, '');
  content = content.replace(/HeadContent,?\s*/g, '');
  content = content.replace(/Scripts,?\s*/g, '');
  content = content.replace(/createRootRouteWithContext,?\s*/g, '');
  content = content.replace(/Outlet,?\s*/g, '');

  fs.writeFileSync(filePath, content);
}
console.log('Done refactoring components');
