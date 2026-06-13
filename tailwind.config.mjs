/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        shine: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '30%': { transform: 'translateX(100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(100%) skewX(-12deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        pulseIcon: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-icon': 'pulseIcon 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
