/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#31E981',
			secondary: '#3083DC',
			midnight: '#141414',
			white: '#F9F9F9',
			borders: '#686963'
		},
		extend: {},
	},
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [],
}
