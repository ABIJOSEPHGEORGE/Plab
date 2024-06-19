/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'color1': '#FF5789', 
        'btnblue': '#5A57FF',
        'background': '#F1F1F5',
        'loginbox': '#9788F5',
        'logintxt': '#F0EDFF',
        'loginbtn':'#8371F2',
        'loginbox2': '#988AF5'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          'display': 'none', /* Chrome, Safari, and Opera */
        },
      });
    },
  ],
}

