/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
     'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        hsBlack: '#140F1B',
        hsPink: '#ff00c3',
        hsBlue: '#4A19C4',
        hsWhite: '#EEEEEE'
      },
      fontFamily: {
        clashDisplay: ["ClashDisplay-Medium"],
        generalSans: ["GeneralSans-Medium"],
  },
    },
    plugins: [require('flowbite/plugin')],
  }
}