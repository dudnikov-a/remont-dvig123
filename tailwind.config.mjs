export default {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#f0f9ff', 100: '#e0f2fe', 500: '#0ea5e9', 600: '#0284c7' },
        dark: { 700: '#1e3a5f', 800: '#172e4a' },
        warm: { 50: '#fefdfb', 100: '#fdf9f0' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
