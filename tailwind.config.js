/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-gold': '#D4AF37',
        'royal-gold-light': '#F1D97A',
        'royal-gold-dark': '#B5942B',
        'royal-cream': '#FDFBF7',
        'royal-red': '#8B0000',
        'royal-charcoal': '#6D1B1B',
        'royal-stone': '#EBE9E4',

        // Indian Theme Colors
        'indian-maroon': '#800000', // Deep Sindoor Red
        'indian-saffron': '#FF9933', // Kesari
        'indian-yellow': '#FFCC00', // Haldi/Turmeric
        'indian-cream': '#FFF8F0', // Fixed typo PPP8F0 -> FFF8F0

        // April Cool Theme
        'cool-cream': '#F9FAFB', // Brighter, cooler white
        'blush-pink': '#FCE7E6', // Soft rose
        'sage-green': '#E8F3E8', // Fresh greenery
        'misty-blue': '#E0F2F1', // Morning mist
        'soft-gold': '#E6CFA0', // Desaturated luxury gold
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        heading: ['"Rozha One"', 'serif'], // New heading font
        devotional: ['"Cinzel Decorative"', 'cursive'], // For invocations
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/cream-paper.png')",
        'mandala-pattern': "url('https://www.transparenttextures.com/patterns/black-scales.png')",
      },
    },
  },
  plugins: [],
}
