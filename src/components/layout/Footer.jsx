// Import React modules
import React from 'react';

const Footer = () => {
  // Dynamic Date Function
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="py-3">&copy; {getCurrentYear()} Yves Koesumo</footer>
  );
};

export default Footer;
