/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'Primary': '#003366',
      'Secondary': '#66CCFF',
      'Text':'#333333',
      'Background':'#F0F0F0',
      'Success':'#28A745',
      'Alerts':'#FFA500',
      'Admin-Text':'#FFFFFF',
      'Admin-Background':'#E0E0E0'
    },
    extend: {},
  },
  plugins: [],
}

