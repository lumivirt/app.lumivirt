/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          800: '#1A1B23',
          850: '#15161D',
          900: '#111218',
          950: '#0D0E14'
        },
        accent: {
          yellow: '#FFE066',
          cyan: '#66F2F1',
          blue: '#66D9E8',
          purple: '#9775fa'
        }
      },
      boxShadow: {
        'glow': '0 0 30px rgba(102, 242, 241, 0.15)',
        'glow-strong': '0 0 40px rgba(102, 242, 241, 0.2)',
        'glow-yellow': '0 0 30px rgba(255, 224, 102, 0.15)',
        'glow-cyan': '0 0 30px rgba(102, 242, 241, 0.15)',
        'glow-blue': '0 0 30px rgba(102, 217, 232, 0.15)',
        'inner-light': 'inset 0 1px 1px rgba(255, 255, 255, 0.15)',
        'inner-glow': 'inset 0 0 20px rgba(102, 242, 241, 0.1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.1) 50%, transparent 60%)'
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'shine': 'shine 3s infinite linear',
        'pulse-slow': 'pulse 3s infinite'
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' }
        }
      }
    },
  },
  plugins: [],
};