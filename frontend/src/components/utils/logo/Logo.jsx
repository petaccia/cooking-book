import React from 'react';
import logo from '../../../images/logo/logo.png';

const Logo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={logo} alt="logo" className="w-full h-full object-contain" />
    </div>
  );
};

export default Logo;
