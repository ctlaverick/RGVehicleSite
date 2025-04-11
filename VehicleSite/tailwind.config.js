// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003366',
        'secondary': '#66CCFF',
        'text': '#333333',
        'background': '#F0F0F0',
        'success': '#28A745',
        'alerts': '#FFA500',
        'admin-text': '#FFFFFF',
        'admin-background': '#E0E0E0',
      },
    },
  },
  plugins: [],
};