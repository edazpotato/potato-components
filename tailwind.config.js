module.exports = {
	theme: {
		screens: {
			sm: '640px',
			md: '769px',
			lg: '1024px',
			xl: '1280px',
		},
		fontFamily: {
			display: ['Roboto', 'sans-serif'],
			body: ['Roboto', 'sans-serif'],
		},
		borderWidth: {
			default: '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
		},
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography')
	]
}