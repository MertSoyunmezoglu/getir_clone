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
      'restaurant-bg':"url(https://getir.com/_next/static/images/partners-background-e516806adcf95650572224b0c2e681f3.jpg)",
      'pricebar-bg':"url(https://getir.com/_next/static/images/static-map-8c6fe0d27804677ece0c96d208c219ba.png)",
      'getir-bag':"url(https://getir.com/_next/static/images/minimum-bag-fec698ae8a95a46df829dfcbba313add.svg)",
      'getir-bag-home':"url(https://getir.com/_next/static/images/bag-3312fc73968345e26f3f610d4f4440c5.svg)",
      'getir-motor':"url(https://getir.com/_next/static/images/courier-pin-d5fe30611fa28465f3cb9840e7807bcc.svg)",
      'getir-car':"url(https://getir.com/_next/static/images/more-courier-pin-235f92455c8e5ccb8f3e44e822b06cff.svg)",
      'getir-bottle':"url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAxOSAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjYuNDY0MUMwIDI2LjAyMjMgMC4zNTgxNzIgMjUuNjY0MSAwLjggMjUuNjY0MUgxNy44NzcyQzE4LjMxOTEgMjUuNjY0MSAxOC42NzcyIDI2LjAyMjMgMTguNjc3MiAyNi40NjQxVjMwLjM5OTlDMTguNjc3MiAzMS4yODM1IDE3Ljk2MDkgMzEuOTk5OSAxNy4wNzcyIDMxLjk5OTlIMS42QzAuNzE2MzQ0IDMxLjk5OTkgMCAzMS4yODM1IDAgMzAuMzk5OVYyNi40NjQxWiIgZmlsbD0iIzFFODI0QyIvPgo8cGF0aCBkPSJNOS4zMzg2MiAzLjQ2MzI5TDEuMDE1MzQgNi43MzA2OUMwLjQwMjg0MSA2Ljk3MTEzIDAgNy41NjIwNCAwIDguMjIwMDRWMTIuMTk0OUMwIDEyLjYzNjcgMC4zNTgxNzIgMTIuOTk0OSAwLjc5OTk5OSAxMi45OTQ5SDE3Ljg3NzJDMTguMzE5MSAxMi45OTQ5IDE4LjY3NzIgMTIuNjM2NyAxOC42NzcyIDEyLjE5NDlWOC4yMjAwNEMxOC42NzcyIDcuNTYyMDQgMTguMjc0NCA2Ljk3MTEzIDE3LjY2MTkgNi43MzA2OUw5LjMzODYyIDMuNDYzMjlaIiBmaWxsPSIjMUU4MjRDIi8+CjxyZWN0IHg9IjAuNjkxODAzIiB5PSIxNC40NDE3IiB3aWR0aD0iMTcuMjk0MyIgaGVpZ2h0PSI5Ljc3MTUxIiByeD0iMC40IiBmaWxsPSIjMUU4MjRDIi8+CjxyZWN0IHg9IjcuMzkyOTQiIHdpZHRoPSIzLjg5MTA5IiBoZWlnaHQ9IjEyLjYyIiByeD0iMC40IiBmaWxsPSIjMUU4MjRDIi8+Cjwvc3ZnPgo=)",
      'getir-order':"url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy44MDY4IDEyLjcwMDFDMjMuNjY2OCAxMi41NTU1IDIzLjQ2OTMgMTIuNDczOSAyMy4yNjIzIDEyLjQ3MzlIMjMuMjYwOEwxMC43MzYzIDEyLjQ5ODlDMTAuNTI4NSAxMi40OTk2IDEwLjMzMTEgMTIuNTgyIDEwLjE5MTggMTIuNzI3M0MxMC4wNTE4IDEyLjg3MTkgOS45ODQwMyAxMy4wNjU4IDEwLjAwMzIgMTMuMjYxMkwxMC45NDA0IDIyLjQ1NTZDMTAuOTYyNSAyMy42NjQ1IDEyLjA3NTEgMjUuMDAwMiAxMy41NTgzIDI1LjAwMDJIMjAuNDUyQzIxLjg1NzkgMjUuMDAwMiAyMy4wNDc4IDIzLjkyNDQgMjMuMDY5OSAyMi42NDMxTDIzLjk5NjkgMTMuMjMzM0MyNC4wMTYgMTMuMDM3OSAyMy45NDY4IDEyLjg0NDcgMjMuODA2OCAxMi43MDAxWiIgZmlsbD0iIzVEM0VCQyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE5LjEgMTQuNDk5MVYxMS41MjcxQzE5LjEgMTAuMjg4IDE4LjE3ODEgOS4zMTgwNiAxNyA5LjMxODA2QzE1LjgyMTkgOS4zMTgwNiAxNC45IDEwLjI4OCAxNC45IDExLjUyNzFWMTQuNDk5MUMxNC45IDE0Ljg2MjkgMTQuNTg3MSAxNS4xNTgxIDE0LjIgMTUuMTU4MUMxMy44MTI5IDE1LjE1ODEgMTMuNSAxNC44NjI5IDEzLjUgMTQuNDk5MVYxMS41MjcxQzEzLjUgOS41NDk1OCAxNS4wMzU4IDguMDAwMTggMTcgOC4wMDAxOEMxOC45NjQyIDguMDAwMTggMjAuNSA5LjU0OTU4IDIwLjUgMTEuNTI3MVYxNC40OTkxQzIwLjUgMTQuODYyOSAyMC4xODcxIDE1LjE1ODEgMTkuOCAxNS4xNTgxQzE5LjQxMjkgMTUuMTU4MSAxOS4xIDE0Ljg2MjkgMTkuMSAxNC40OTkxWiIgZmlsbD0iI0ZGRDMwMCIvPgo8L3N2Zz4K)"
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
