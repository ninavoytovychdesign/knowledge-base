/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Brand colors
        primary: '#E76F51',
        
        // Background colors
        background: '#000000',
        
        // Text colors
        textPrimary: '#E6E6E6',
        textSecondary: '#777777',
        
        // UI colors
        border: '#1A1A1A',
        
        // Custom gray shades
        gray: {
          hover: '#4B5563',
        },
        
        // Gradient colors (for reference, actual gradients in utilities)
        gradient: {
          start: '#B6CAFB',
          end: '#BDB3FF',
        }
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        // Gradient backgrounds
        '.bg-gradient-accent': {
          'background': 'linear-gradient(135deg, #B6CAFB 0%, #BDB3FF 100%)',
        },
        
        // Gradient text
        '.bg-gradient-accent-text': {
          'background': 'linear-gradient(135deg, #B6CAFB 0%, #BDB3FF 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        
        // Glowing border effect
        '.glowing-border': {
          'position': 'relative',
          'background': '#141414',
          'border-radius': '8px',
        },
        '.glowing-border::before': {
          'content': '""',
          'position': 'absolute',
          'top': '-2px',
          'left': '-2px',
          'right': '-2px',
          'bottom': '-2px',
          'background': 'conic-gradient(from 0deg, #B6CAFB, #BDB3FF, #B6CAFB, #BDB3FF, #B6CAFB)',
          'border-radius': '10px',
          'z-index': '-1',
          'opacity': '0',
          'transition': 'opacity 0.3s ease-out',
          'animation': 'spin 3s linear infinite',
        },
        '.glowing-border:hover::before': {
          'opacity': '1',
        },
        
        // Keyframe animations
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
