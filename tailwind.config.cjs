/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#E76F51',
        gray: {
          hover: '#4B5563',
        },
        background: '#000000',
        textPrimary: '#E6E6E6',
        textSecondary: '#777777',
        border: '#1A1A1A',
        gradient: {
          accent: 'linear-gradient(135deg, #B6CAFB 0%, #BDB3FF 100%)',
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.bg-gradient-accent': {
          'background': 'linear-gradient(135deg, #B6CAFB 0%, #BDB3FF 100%)',
        },
        '.bg-gradient-accent-text': {
          'background': 'linear-gradient(135deg, #B6CAFB 0%, #BDB3FF 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.glowing-border': {
          'position': 'relative',
          'background': '#141414',
          'border-radius': '12px',
        },
        '.glowing-border::before': {
          'content': '""',
          'position': 'absolute',
          'top': '-2px',
          'left': '-2px',
          'right': '-2px',
          'bottom': '-2px',
          'background': 'conic-gradient(from 0deg, #B6CAFB, #BDB3FF, #B6CAFB, #BDB3FF, #B6CAFB)',
          'border-radius': '14px',
          'z-index': '-1',
          'opacity': '0',
          'transition': 'opacity 0.3s ease-out',
          'animation': 'spin 3s linear infinite',
        },
        '.glowing-border:hover::before': {
          'opacity': '1',
        },
        '@keyframes spin': {
          'from': {
            'transform': 'rotate(0deg)',
          },
          'to': {
            'transform': 'rotate(360deg)',
          },
        }
      })
    }
  ],
}
