/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold:      'var(--gold)',
        gold2:     'var(--gold2)',
        dark:      'var(--bg)',
        dark2:     'var(--bg2)',
        dark3:     'var(--bg3)',
        deep:      'var(--bg-deep)',
        card:      'var(--bg-card)',
        elevated:  'var(--bg-elevated)',
        cream:     'var(--cream)',
        muted:     'var(--text-muted)',
        subtle:    'var(--text-subtle)',
        body:      'var(--text-body)',
        faint:     'var(--text-faint)',
        dim:       'var(--text-dim)',
        secondary: 'var(--text-secondary)',
      },
      borderColor: {
        subtle:   'var(--border-subtle)',
        light:    'var(--border-light)',
        medium:   'var(--border-medium)',
        goldline: 'var(--border-gold)',
      },
      backgroundColor: {
        nav:        'var(--nav-bg)',
        'nav-mobile': 'var(--nav-mobile-bg)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
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
};
