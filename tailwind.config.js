/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        s: { min: '200px', max: '640px' },
      },
      colors: {
        transparent: 'transparent',
      },
      backgroundColor: {
        gradientColor: '#073050',
        gradientColorHover: '#0a4069',
        inputColor: '#252b4b',
      },
      backgroundImage: {
        gradientColor:
          'linear-gradient(213deg, #073050e3 0%, #755a65d3 55%, #313131e1 100%)',
        gradientColorHover:
          'linear-gradient(213deg, #0a4069 0%, #92717ed3 55%, #474747e1 100%)',
      },
    },
  },
  plugins: [],
}
