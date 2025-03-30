module.exports = {
    content: [
        './**/*.razor',
        './Components/**/*.tsx',
		'./Pages/**/*.tsx',
    ],
    variants: {
        extend: {
            divideColor: ['group-hover']
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}