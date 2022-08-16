/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white':'#FFFFFF',
      'black':'#4F4F4F',
      'red': '#EB5757',
      'orange': '#F2994A',
      'green':'#24A031',
      'gray':'#BDBDBD',
      'yellow':'#F2C94C',
    },
    extend: {
      backgroundImage: {
        'hp-bg': "url('$lib/assets/bgimg.png')",
        'sushi-bg':"url(https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)",
        'sushi-kithcen':"url(https://images.unsplash.com/photo-1576237934915-c716cf54b24d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"

      },

    }
  },
  plugins: []
};