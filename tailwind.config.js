/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Mr. Robot / Ubuntu / AI theme colors
        terminal: {
          50: '#e6ffec',
          100: '#b3ffc7',
          200: '#80ff9f',
          300: '#4dff77',
          400: '#1aff4f',
          500: '#00ff41', // Primary terminal green
          600: '#00e63a',
          700: '#00cc33',
          800: '#00b32c',
          900: '#009925',
        },
        matrix: {
          50: '#e6f7f2',
          100: '#b3ead9',
          200: '#80ddc0',
          300: '#4dd0a7',
          400: '#1ac38e',
          500: '#0dbc79', // Matrix green
          600: '#0ca66b',
          700: '#0a905d',
          800: '#087a4f',
          900: '#066441',
        },
        ubuntu: {
          50: '#fef2f0',
          100: '#fdddd7',
          200: '#fbb8a8',
          300: '#f99379',
          400: '#f76e4a',
          500: '#e95420', // Ubuntu orange
          600: '#d1491c',
          700: '#b93e18',
          800: '#a13314',
          900: '#892810',
        },
        hacker: {
          50: '#fff5f5',
          100: '#ffe0e0',
          200: '#ffb3b3',
          300: '#ff8585',
          400: '#ff7070',
          500: '#ff5555', // Hacker red
          600: '#e64d4d',
          700: '#cc4444',
          800: '#b33b3b',
          900: '#993333',
        },
        cyber: {
          50: '#f2f4f8',
          100: '#e0e5ec',
          200: '#bcc5d4',
          300: '#98a5bc',
          400: '#7485a4',
          500: '#6272a4', // Cyber blue
          600: '#586694',
          700: '#4e5a83',
          800: '#444e73',
          900: '#3a4263',
        },
        console: {
          50: '#f5f5f6',
          100: '#e8e9eb',
          200: '#cfd1d6',
          300: '#b6b9c1',
          400: '#9da1ac',
          500: '#44475a', // Console gray
          600: '#3d4051',
          700: '#363848',
          800: '#2f303f',
          900: '#282936',
        },
        ai: {
          50: '#f0fffe',
          100: '#ccfffe',
          200: '#99fffd',
          300: '#66fffc',
          400: '#33fffb',
          500: '#8be9fd', // AI cyan
          600: '#7dd2e4',
          700: '#6fbccb',
          800: '#61a5b2',
          900: '#538f99',
        },
        dark: {
          DEFAULT: '#0c0c0c', // Terminal black
          light: '#2c001e',   // Ubuntu dark
          lighter: '#44475a', // Console gray
          deep: '#000000',    // Pure black
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Ubuntu Mono', 'Fira Code', 'monospace'],
        terminal: ['Ubuntu Mono', 'monospace'],
        code: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'terminal': '0 0 20px rgba(0, 255, 65, 0.3)',
        'ubuntu': '0 0 20px rgba(233, 84, 32, 0.3)',
        'hacker': '0 0 20px rgba(255, 85, 85, 0.3)',
        'ai-glow': '0 0 30px rgba(139, 233, 253, 0.4)',
        'matrix': '0 0 25px rgba(13, 188, 121, 0.4)',
      },
      animation: {
        'matrix-flow': 'matrix-flow 4s ease-in-out infinite',
        'scan-line': 'scan-line 3s linear infinite',
        'terminal-glow': 'terminal-glow 2s ease-in-out infinite',
        'glitch': 'glitch-1 0.5s infinite',
        'cursor-blink': 'cursor-blink 1s infinite',
        'ai-float': 'ai-node-float 6s ease-in-out infinite',
        'ubuntu-spin': 'ubuntu-spin 1s linear infinite',
      },
      keyframes: {
        'matrix-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'scan-line': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        'terminal-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px var(--terminal-green)',
            textShadow: '0 0 10px var(--terminal-green)'
          },
          '50%': { 
            boxShadow: '0 0 20px var(--terminal-green), 0 0 30px var(--terminal-green)',
            textShadow: '0 0 20px var(--terminal-green)'
          }
        },
        'glitch-1': {
          '0%, 14%, 15%, 49%, 50%, 99%, 100%': { transform: 'translate(0)' },
          '15%, 49%': { transform: 'translate(-2px, -1px)' },
          '50%, 99%': { transform: 'translate(1px, -2px)' }
        },
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        'ai-node-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(120deg)' },
          '66%': { transform: 'translateY(10px) rotate(240deg)' }
        },
        'ubuntu-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      typography: {
        terminal: {
          css: {
            fontFamily: 'JetBrains Mono, Ubuntu Mono, monospace',
            color: '#50fa7b',
            backgroundColor: '#0c0c0c',
          }
        }
      }
    },
  },
  plugins: []
}
