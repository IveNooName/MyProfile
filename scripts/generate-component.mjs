#!/usr/bin/env node
// Usage: npm run g:c components/Navbar
// Erzeugt: src/<path>/<Name>/<Name>.tsx + <Name>.css, CSS ist im tsx bereits importiert.

import { mkdirSync, existsSync, writeFileSync } from "node:fs";
import { join, basename, dirname } from "node:path";

const input = process.argv[2];

if (!input) {
  console.error("❌ Bitte einen Pfad angeben, z.B.: npm run g:c components/Navbar");
  process.exit(1);
}

// Erlaubt: "components/Navbar" oder "components/layout/Navbar"
const name = basename(input);
const parentDir = dirname(input);

// Component-Name: erster Buchstabe gross (Navbar bleibt Navbar, navbar -> Navbar)
const componentName = name.charAt(0).toUpperCase() + name.slice(1);

const targetDir = join("src/components", parentDir, componentName);

if (existsSync(targetDir)) {
  console.error(`❌ Ordner existiert bereits: ${targetDir}`);
  process.exit(1);
}

mkdirSync(targetDir, { recursive: true });

const tsxContent = `import "./${componentName}.css";

interface ${componentName}Props {}

function ${componentName}(props: ${componentName}Props) {
  return (
    <div className="${toKebabCase(componentName)}">
      ${componentName} works!
    </div>
  );
}

export default ${componentName};
`;

const cssContent = `.${toKebabCase(componentName)} {

}
`;

function toKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

writeFileSync(join(targetDir, `${componentName}.tsx`), tsxContent);
writeFileSync(join(targetDir, `${componentName}.css`), cssContent);

console.log(`✅ Component erstellt: ${targetDir}/`);
console.log(`   ├── ${componentName}.tsx`);
console.log(`   └── ${componentName}.css`);
