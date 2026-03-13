/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        primary: '#1a74b3',
        'primary-dark': '#114c7d',
        accent: '#f5b731',
        'accent-dark': '#e5a520',
        dark: '#111111',
        'gray-text': '#666666',
      },
    },
  },
  plugins: [],
}
