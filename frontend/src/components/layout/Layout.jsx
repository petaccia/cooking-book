// Layout.jsx
import React from 'react';
import BackgroundImage from '../utils/backgroundImage/BackgroundImage';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <BackgroundImage className="">
      <Outlet />
    </BackgroundImage>
  );
};

export default Layout;