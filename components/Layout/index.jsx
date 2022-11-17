import React, { useState } from 'react';
import { MainHeader, Footer, MobileNavigation } from '../index';


const Layout = ({ children }) => {
  return (
    <>
      <MobileNavigation />
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
