import React from 'react';
import './AnimatedLogo.css';
import logo from './logo.png';

const AnimatedLogo = () => {
  return (
    <div className="animated-logo-container">
      <img src={logo} alt="Animated Logo" className="animated-logo" />
    </div>
  );
};

export default AnimatedLogo;