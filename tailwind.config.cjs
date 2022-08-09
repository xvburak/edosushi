/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white':'#FFFFFF',
      'black':'#4F4F4E',
      'red': '#EB5757',
      'orange': '#F2994A',
      'green':'#24A031',
      'gray':'#BDBDBD',
      'yellow':'#F2C94C',
    },
    extend: {
      backgroundImage: {
        'hp-bg': "url('$lib/assets/bgimg.png')",
      }
    }
  },
  plugins: []
};