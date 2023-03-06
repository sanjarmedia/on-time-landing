const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content:   [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        integral: ['IntegralCF', ...defaultTheme.fontFamily.sans],
        helvetica: ['Helvetica', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'orange-color': '#D63E0E',
        'orange-full-color': '#B2330B',
        'gray-color':'#E5E5E5',
        'background-gray-color':'#f5f5f5',
        'line-background':'#f7f7f7',
        'background-black-color':'#1E1E1E'
      },
      fondSize: {
        xs: '0.625rem',
        sm: '0.9375rem'
      },
      backgroundImage: {
        'background-main': "url('/background-image.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['dark']
  }
}
