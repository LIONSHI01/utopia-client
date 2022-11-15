import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { UserIcon, Searchbar, Overlay } from '../../index';
import { NavbarContainer, StickyFillinSpace } from './index.styles';
import { HiOutlineMenu } from '../../ReactIcons';

const MobileNavbar = ({ setIsSidebarOpen }) => {
  const { data } = useSession();
  const user = data?.profile;

  const [sticky, setSticky] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

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
        <div className="upper_part">
          <div
            className="sidebar_open_btn"
            onClick={() => setIsSidebarOpen(true)}
          >
            <HiOutlineMenu size={30} />
          </div>
          <Link href="/">
            <a className="logo">Utopia</a>
          </Link>
          <div className="user_section">
            {data && (
              <UserIcon user={user} onClick={() => setIsSidebarOpen(true)} />
            )}
          </div>
        </div>

        <Searchbar setShowOverlay={setShowOverlay} />
      </NavbarContainer>
      {/* <Overlay zIndex={100} showUp={showOverlay} setShowUp={setShowOverlay} /> */}
    </>
  );
};

export default MobileNavbar;
