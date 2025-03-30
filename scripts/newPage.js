import fs from 'fs';
import path from 'path';

// Get component name from command line arguments
const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name. Example: npm run new-component Dashboard/MyComponent');
  process.exit(1);
}

// Extract the base name without the path
const baseName = path.basename(componentName);
const directoryPath = path.join('Pages', componentName);
createComponent(baseName, directoryPath);

function createComponent(componentName, directoryPath) {
  const fullPath = directoryPath;
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${fullPath}`);
  }
  
  // Create Razor file
  const razorContent = `@page "/${directoryPath.toLowerCase().replace(/\\/g, '/').replace('pages/', '')}"
@layout ReactLayout

<React Component="@(typeof(${componentName}).ScriptName())" />
`;
  
  // Create TSX file
  const tsxContent = `import { render } from 'preact';

render(<${componentName} />, document.getElementById('Pages/${componentName}/${componentName}')!);
export function ${componentName}() {
  return (
    <Layout>
		<div>
			<h1>${componentName}</h1>
		</div>
	</Layout>
  );
}
`;
  
  // Write files
  const razorFilePath = path.join(fullPath, `${componentName}.razor`);
  const tsxFilePath = path.join(fullPath, `${componentName}.tsx`);
  
  try {
    fs.writeFileSync(razorFilePath, razorContent);
    fs.writeFileSync(tsxFilePath, tsxContent);
    
    console.log(`Created component files:`);
    console.log(`- ${razorFilePath}`);
    console.log(`- ${tsxFilePath}`);
  } catch (error) {
    console.error(`Error creating files:`, error);
    process.exit(1);
  }
}