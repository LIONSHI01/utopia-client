import React, { useState } from 'react';

import { MobileNavbar, MainMenuSidebar } from '../../index';
const MobileNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <MobileNavbar setIsSidebarOpen={setIsSidebarOpen} />
      <MainMenuSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </>
  );
};

export default MobileNavigation;
