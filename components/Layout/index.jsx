import React from 'react';
import { MainHeader, CategoryBar } from '../index';

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <CategoryBar />
      {children}
    </>
  );
};

export default Layout;
