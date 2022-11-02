import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Router from 'next/router';
import { HiOutlineSearch, HiOutlineMail } from 'react-icons/hi';
import { RiNotification4Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  AuthForm,
  NotificationDropdown,
} from '../index';

import { HeaderWrapper } from './index.styles';

const MainHeader = () => {
  // CONFIGURATION
  const ref = useRef();
  const { data } = useSession();
  const user = data?.profile;

  // STATE MANAGEMENT
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showNotiDropdown, setShowNotiDropdown] = useState(false);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (showNotiDropdown && !ref.current.contains(e.target)) {
        setShowNotiDropdown(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickOutside, true);

    return () => {
      window.removeEventListener('mousedown', checkIfClickOutside, true);
    };
  }, [showNotiDropdown]);

  return (
    <>
      <HeaderWrapper>
        <div className="logo">
          <Link href="/">
            <a>
              <h2>Utopia</h2>
            </a>
          </Link>
        </div>
        <div className="searchBar">
          <input placeholder="Search" />
          <button className="search-btn">
            <HiOutlineSearch size={20} color="var(--white)" />
          </button>
        </div>
        <div className="links">
          <Link href={`users/${user?._id}/collections`}>
            <a>
              <FiHeart size={23} color="var(--black-light-2)" />
            </a>
          </Link>
          <div
            className="notification"
            onClick={() => setShowNotiDropdown((prev) => !prev)}
            ref={ref}
          >
            <RiNotification4Line size={23} color="var(--black-light-2)" />
            <div className="noti-number">
              <span>{user?.notifications.length || 0}</span>
            </div>
            <NotificationDropdown
              notifications={user?.notifications}
              showUp={showNotiDropdown}
              setShowUp={setShowNotiDropdown}
            />
          </div>

          <Button size="x" onClick={() => Router.replace('/create-post')}>
            Sell
          </Button>

          {user && <UserIcon user={user} hasUserMenu={true} />}

          {!user && (
            <div className="auth-buttons">
              <Button
                size="x"
                buttonType={BUTTON_TYPES.outlineGrey}
                onClick={() => setShowAuthForm(true)}
              >
                Sign In
              </Button>
              <Button
                size="x"
                buttonType={BUTTON_TYPES.base}
                onClick={() => setShowAuthForm(true)}
              >
                Get Start
              </Button>
            </div>
          )}
        </div>
      </HeaderWrapper>

      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
    </>
  );
};

export default MainHeader;
