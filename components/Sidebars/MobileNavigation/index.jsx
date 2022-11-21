import React, { useState } from 'react';

import { MobileNavbar, MainMenuSidebar } from '../../index';
const MobileNavigation = ({ theme, setTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <MobileNavbar setIsSidebarOpen={setIsSidebarOpen} />
      <MainMenuSidebar
        theme={theme}
        setTheme={setTheme}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default MobileNavigation;
