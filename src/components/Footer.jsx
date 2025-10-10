import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-[#1A1A1A] py-6 text-center text-sm text-textSecondary">
      <div className="max-w-screen-xl mx-auto px-12">
        © 2025 Nina Voytovych. All rights reserved.
        <br />
        <a href="/privacy" className="underline hover:bg-gradient-accent-text transition-colors duration-300">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;