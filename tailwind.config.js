
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#C7A491',
        'blush-pink': '#EECFCA',
        'muted-sage': '#919682',
        'light-sage': '#C7CDBF',
        'deep-olive': '#595E48',
        'cream-bg': '#FBFBF9',
        'card-bg': '#FDFAF6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Cormorant Garamond"', 'serif'], // Defaulting sans to serif for this elegant theme
      },
      boxShadow: {
        'card': '0 10px 40px -10px rgba(89, 94, 72, 0.08)',
      }
    },
  },
  plugins: [],
}
