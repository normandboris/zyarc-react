/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:  '#f5a623',
        gold2: '#e8920f',
        dark:  '#141414',
        dark2: '#1c1c1c',
        dark3: '#242424',
        cream: '#f5f0e8',
        muted: '#d4cfc8',
      },
      fontFamily: {
        script:   ['"Dancing Script"', 'cursive'],
        display:  ['"Playfair Display"', 'serif'],
        sans:     ['Lato', 'sans-serif'],
      },
      keyframes: {
        badgePop: {
          '0%':   { transform: 'scale(1)' },
          '40%':  { transform: 'scale(1.5)' },
          '70%':  { transform: 'scale(.85)' },
          '100%': { transform: 'scale(1)' },
        },
        itemSlide: {
          from: { opacity: 0, transform: 'translateX(16px)' },
          to:   { opacity: 1, transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        badgePop:  'badgePop .4s cubic-bezier(.36,.07,.19,.97) both',
        itemSlide: 'itemSlide .25s ease both',
        fadeIn:    'fadeIn .4s ease both',
      },
    },
  },
  plugins: [],
}
