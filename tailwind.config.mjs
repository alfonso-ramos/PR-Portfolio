/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: '#3083DC',
			secondary: '#31E981',
			midnight: '#141414',
			white: '#F9F9F9',
			borders: '#686963'
		},
		extend: {},
	},
	darkMode: ["class", '[data-theme="dark"]'],
	plugins: [],
}
