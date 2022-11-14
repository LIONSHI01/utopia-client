import React from 'react';

import { UserIcon, Searchbar } from '../../index';
import { NavbarContainer } from './index.styles';
import { HiOutlineMenu } from '../../ReactIcons';

const MobileNavbar = ({ setIsSidebarOpen }) => {
  return (
    <NavbarContainer>
      <div className="sidebar_open_btn" onClick={() => setIsSidebarOpen(true)}>
        <HiOutlineMenu size={30} />
      </div>
      <div className="user_section">
        <UserIcon />
      </div>
      <div className="sesarch_bar">
        <Searchbar />
      </div>
    </NavbarContainer>
  );
};

export default MobileNavbar;
