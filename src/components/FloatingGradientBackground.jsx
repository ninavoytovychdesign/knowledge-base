import React from 'react';

const FloatingGradientBackground = () => {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30 animate-float-slow"
      style={{
        background: `
          radial-gradient(
            circle at 30% 40%,
            rgba(182, 202, 251, 0.6) 0%,
            rgba(189, 179, 255, 0.4) 25%,
            rgba(232, 211, 255, 0.3) 50%,
            rgba(158, 227, 255, 0.2) 75%,
            transparent 100%
          ),
          radial-gradient(
            circle at 70% 60%,
            rgba(158, 227, 255, 0.4) 0%,
            rgba(232, 211, 255, 0.3) 30%,
            rgba(189, 179, 255, 0.2) 60%,
            transparent 80%
          ),
          radial-gradient(
            circle at 50% 20%,
            rgba(189, 179, 255, 0.3) 0%,
            rgba(182, 202, 251, 0.2) 40%,
            transparent 70%
          )
        `,
        backgroundSize: '200% 200%',
        mixBlendMode: 'lighten'
      }}
    />
  );
};

export default FloatingGradientBackground;
