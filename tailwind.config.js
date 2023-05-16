/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				paralax:
					'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("./web.jpg")',
				paralaxdos:
					'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("./html.jpg")',
				paralaxtres:
					'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("./boceto.jpg")',
				paralaxcuatro:
					'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("./ctrlc.jpg")',
				paralaxfooter:
					'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("./info.jpg")',
				topography:
					'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("./topography.svg")',
			},
			backgroundColor: {
				fondo: '#1f1f1f',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
