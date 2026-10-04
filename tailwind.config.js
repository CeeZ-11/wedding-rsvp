
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'warm-beige': 'var(--accent-beige)',
        'warm-beige-strong': 'var(--accent-beige-strong)',
        'blush-pink': '#EECFCA',
        'muted-sage': '#919682',
        'light-sage': '#C7CDBF',
        'deep-olive': 'var(--text-primary)',
        'olive-secondary': 'var(--text-secondary)',
        'readable-border': 'var(--ui-border)',
        'error-strong': 'var(--error-text)',
        'cream-bg': '#FBFBF9',
        'card-bg': 'var(--card-background)',
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
