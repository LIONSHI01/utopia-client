import React from 'react';
import { MainHeader, Footer, MobileNavigation } from '../index';

const Layout = ({ children, theme, themeToggler }) => {
  return (
    <>
      <MobileNavigation theme={theme} setTheme={themeToggler} />
      <MainHeader theme={theme} setTheme={themeToggler} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
