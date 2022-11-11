import React from 'react';
import { MainHeader, Footer } from '../index';

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
