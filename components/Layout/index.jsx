import React from 'react';
import { MainHeader, Footer, MainMenuSidebar } from '../index';

const Layout = ({ children }) => {
  return (
    <>
      <MainMenuSidebar />
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
