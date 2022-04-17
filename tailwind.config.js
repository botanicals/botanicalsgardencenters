const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#89231e',
          green: '#9eca3c',
          orange: '#f4a702',
        },
      },
      fontFamily: {
        sans: ['futura-pt', ...defaultTheme.fontFamily.sans],
        'sans-condensed': ['futura-pt-condensed', ...defaultTheme.fontFamily.sans],
        'sans-bold': ['futura-pt-bold', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio'), require('@tailwindcss/line-clamp')],
};
