import React from 'react';

const SpotlightEffect = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: `
          radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.08) 0%,
            rgba(255, 255, 255, 0.04) 25%,
            rgba(255, 255, 255, 0.02) 50%,
            transparent 100%
          )
        `,
        animation: 'spotlight-pulse 8s ease-in-out infinite'
      }}
    />
  );
};

export default SpotlightEffect;
