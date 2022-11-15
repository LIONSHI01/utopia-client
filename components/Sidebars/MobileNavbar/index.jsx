import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { UserIcon, Searchbar } from '../../index';
import { NavbarContainer, StickyFillinSpace } from './index.styles';
import { HiOutlineMenu } from '../../ReactIcons';

const MobileNavbar = ({ setIsSidebarOpen }) => {
  const { data } = useSession();
  const user = data?.profile;

  const [sticky, setSticky] = useState(false);

  // STICKY EFFECT
  const addStickyEffect = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addStickyEffect, true);
  }, []);

  return (
    <>
      <StickyFillinSpace sticky={sticky} />
      <NavbarContainer sticky={sticky}>
        <div
          className="sidebar_open_btn"
          onClick={() => setIsSidebarOpen(true)}
        >
          <HiOutlineMenu size={30} />
        </div>
        <Link href="/">
          <a className="logo">Utopia</a>
        </Link>
        <div className="sesarch_bar">
          <Searchbar />
        </div>
        <div className="user_section">
          {data && (
            <UserIcon user={user} onClick={() => setIsSidebarOpen(true)} />
          )}
        </div>
      </NavbarContainer>
    </>
  );
};

export default MobileNavbar;
