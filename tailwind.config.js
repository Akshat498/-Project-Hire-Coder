/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'img':"url('../src/images/background.png')",
        'img':"url('../src/images/section(12).png')",
      },
      colors: {
        lightwhite: '#F7F7F7',
        green: '#14A800',
        grey: '#828282',
      },
      fontSize: {
        sm: '10px',
        md: '12px',
        lg: '14px',
        xl: '16px',
        doubleXl: '18px',
        tripleXl: '20px',
        fourXl: '24px',
        fiveXl: '48px',

      },
      fontWeight: {
        sm: '300',
        md: '400',
        lg: '500',
        xl: '600',
      }
    },
  },
  plugins: [],
}