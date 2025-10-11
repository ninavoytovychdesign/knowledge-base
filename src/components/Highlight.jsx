import React from 'react';

const Highlight = ({ children, className = "" }) => {
  return (
    <span 
      className={`inline-block px-2 py-1 rounded-md bg-gradient-to-r from-[#C0392B] via-[#E74C3C] to-[#C0392B] bg-[length:200%_200%] text-white font-medium font-helvetica animate-pulse ${className}`}
    >
      {children}
    </span>
  );
};

export default Highlight;
