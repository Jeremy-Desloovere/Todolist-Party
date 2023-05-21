/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkColor: '#282c34',
        textColor: 'white',
        textDoneColor: 'pink',
        mainBg: '#282c34',
        btnBlue: '#0000CD',
        btnGreen: '#3CB371',
        btnRed: '#DC143C',
        btnPurple: '#BA55D3',
      }
    },
  },
  plugins: [],
}

