module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'md': {'max': '991.98px'}
    },
    colors: {
      black: {
        '100': '#858585',
        '200': '#717171',
        '300': '#252733',
        '400': '#000000',
      },
      grayPrimary: '#F2F2F2',
      yellowPrimary: '#FFCA40',
      yellow: {
        '500': '#EDAC04',
      },
    },
    extend: {
      screens: {
        'xs': {'max': '575.98px'}
      },
      fontSize: {
        '3-5xl': '2rem'
      },
      borderRadius: {
        'slg': '0.625rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
