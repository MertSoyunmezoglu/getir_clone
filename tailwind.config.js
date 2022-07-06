/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
      container: {
    padding: {
      DEFAULT: '3rem',
      sm: '4rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
  },
    extend: {      backgroundImage: {
      'mobile-app': "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)",
      'mobile-phone': "url(https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png)",
    },
      colors: {
        'brand-color': '#4d3398',
        'primary-brand-color':'#5d3ebc',
        'secondary-brand-color':'#7849f7',
        'brand-yellow':'#ffd300'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
