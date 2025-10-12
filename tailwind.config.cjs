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
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
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
               },
               
               '@keyframes float-slow': {
                 '0%': {
                   'background-position': '0% 0%',
                   'filter': 'hue-rotate(0deg) brightness(1) saturate(1)',
                   'transform': 'scale(1) rotate(0deg) translate(0%, 0%)',
                 },
                 '20%': {
                   'background-position': '20% 10%',
                   'filter': 'hue-rotate(20deg) brightness(1.1) saturate(1.05)',
                   'transform': 'scale(1.02) rotate(0.5deg) translate(-1%, 1%)',
                 },
                 '40%': {
                   'background-position': '40% 20%',
                   'filter': 'hue-rotate(40deg) brightness(0.95) saturate(0.95)',
                   'transform': 'scale(0.98) rotate(-0.3deg) translate(1%, -1%)',
                 },
                 '60%': {
                   'background-position': '60% 10%',
                   'filter': 'hue-rotate(60deg) brightness(1.05) saturate(1.1)',
                   'transform': 'scale(1.01) rotate(0.8deg) translate(-0.5%, 0.5%)',
                 },
                 '80%': {
                   'background-position': '80% 0%',
                   'filter': 'hue-rotate(80deg) brightness(0.9) saturate(0.9)',
                   'transform': 'scale(0.99) rotate(-0.2deg) translate(0.5%, -0.5%)',
                 },
                 '100%': {
                   'background-position': '0% 0%',
                   'filter': 'hue-rotate(0deg) brightness(1) saturate(1)',
                   'transform': 'scale(1) rotate(0deg) translate(0%, 0%)',
                 },
               },
               
               '.animate-float-slow': {
                 'animation': 'float-slow 25s ease-in-out infinite',
               },
        
        // Custom duration for certificate hover effect
        '.duration-400': {
          'transition-duration': '400ms',
        },
        '.duration-600': {
          'transition-duration': '600ms',
        },
        '.ease-magnetic': {
          'transition-timing-function': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        },
        '@keyframes electric-pulse': {
          '0%, 100%': {
            'box-shadow': '0 0 20px #00ffff, 0 0 40px #00ffff, 0 0 60px #00ffff',
            'border-color': '#00ffff'
          },
          '50%': {
            'box-shadow': '0 0 30px #00ffff, 0 0 60px #00ffff, 0 0 90px #00ffff',
            'border-color': '#00ccff'
          }
        },
        
        // 3D Perspective and transforms
        '.perspective-1000': {
          'perspective': '1000px',
        },
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-12': {
          'transform': 'rotateY(12deg)',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
        '.translate-z-20': {
          'transform': 'translateZ(20px)',
        },
        '.shadow-3xl': {
          'box-shadow': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        }
      })
    }
  ],
}
