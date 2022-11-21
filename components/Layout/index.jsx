import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { MainHeader, Footer, MobileNavigation } from '../index';

const Layout = ({ children, theme, themeToggler }) => {
  NProgress.configure({ showSpinner: false });
  Router.onRouteChangeStart = () => NProgress.start();
  Router.onRouteChangeComplete = () => NProgress.done();
  Router.onRouteChangeError = () => NProgress.done();

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
