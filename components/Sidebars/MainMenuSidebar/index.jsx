import React, { useState } from 'react';

import SidebarIcon from './SidebarIcon/index';
import SidebarMenu from './SidebarMenu/index';

const MainMenuSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidebarIcon isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      <SidebarMenu isOpen={isOpen} />
    </>
  );
};

export default MainMenuSidebar;
