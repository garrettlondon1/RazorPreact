import { build } from 'esbuild';

build({
    entryPoints: ['./Pages/**/*.tsx', './Components/**/*.tsx'], // Adjust the entry point to your main file
    bundle: true,
    outdir: 'wwwroot/js/dist', // Output file
    minify: true,
    sourcemap: true,
    target: ['es2020'], // Target environment
    loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
        '.ts': 'ts',
        '.tsx': 'tsx',
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
}).then(() => {
    console.log('Build completed successfully!');
}).catch((error) => {
    console.error('Build failed:', error);
    process.exit(1);
});