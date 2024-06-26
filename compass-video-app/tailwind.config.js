/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#67BDFF',
          '200': '#068DFF',
          '300': '#037AEB',
          '400': '#0063E5',
          '500': '#00386C',
          'secondary': '#FFFFFF',
          'accent': '#02E7F5'
        },

        neutral: {
          '-100': '#FFFFFF',
          '100': '#F9F9F9',
          '200': '#C8C9CB',
          '300': '#74757D',
          '400': '#5F6169',
          '500': '#30333E',
          '600': '#1A1D29',
          '700': '#101116',
        },

        opacity: {
          'white-10': '#FFFFFF/10',
          'white-40': '#F9F9F9/40',
          'black-10': '#000000/10',
          '12': '#FFFFFF/12',
        },

        applications: {
          'background': '#3E3E3E',
          'disabled': '#5F6169',
          'medium-emphasis': '#C8C9CB',
          'high-emphasis': '#F9F9F9',
          'link': '#67BDFF',
          'hover-button-outline': '#000000/10',
          'border': '#FFFFFF/12',
          'footer': '#090B13',
          'header': '#131313'
        },
         
      },

      fontFamily: {
        'montserrat': 'Montserrat',
        'worksans': 'Work Sans',
        'lato': 'Lato'
      },

      
    },
  },
  plugins: [],
}

