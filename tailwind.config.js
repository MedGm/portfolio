/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1', // Base primary color
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b', // Base secondary color
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Base accent color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        dark: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#1e3a8a',
          dark: '#060f1d',
          darker: '#030812',
        },
        glow: {
          blue: '#00f3ff',
          purple: '#9d4edd',
          pink: '#f472b6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'neon-light': '0 0 5px theme(colors.glow.blue), 0 0 10px theme(colors.glow.blue)',
        'neon-medium': '0 0 15px theme(colors.glow.blue), 0 0 30px rgba(0, 243, 255, 0.5)',
        'neon-strong': '0 0 20px theme(colors.glow.blue), 0 0 40px theme(colors.glow.blue), 0 0 60px rgba(0, 243, 255, 0.3)',
        'neon-purple': '0 0 15px theme(colors.glow.purple), 0 0 30px rgba(157, 78, 221, 0.5)',
      },
      animation: {
        'gradient-x': 'gradient-x 10s ease infinite',
        'gradient-y': 'gradient-y 10s ease infinite',
        'gradient-xy': 'gradient-xy 10s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite alternate',
        'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom'
          }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'pulse-glow': {
          '0%': { boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(157, 78, 221, 0.7), 0 0 30px rgba(157, 78, 221, 0.4)' },
          '100%': { boxShadow: '0 0 10px rgba(0, 243, 255, 0.5)' }
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: []
}
