/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#31E981',
			secondary: '#150578',
			midnight: '#020214',
			white: '#F5F1ED',
			borders: '#6B818C'
		},
		extend: {},
	},
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [],
}
