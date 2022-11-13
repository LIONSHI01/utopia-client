import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Router from 'next/router';

import { RiNotification4Line, FiHeart } from '../ReactIcons';

import {
  UserIcon,
  Button,
  BUTTON_TYPES,
  AuthForm,
  NotificationDropdown,
  Searchbar,
  CategoryBar,
  AcBalanceBox,
} from '../index';

import { HeaderWrapper, InnerWrapper, StickyFillinSpace } from './index.styles';

const MainHeader = () => {
  // CONFIGURATION
  const ref = useRef();
  const { data } = useSession();
  const user = data?.profile;

  // STATE MANAGEMENT
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showNotiDropdown, setShowNotiDropdown] = useState(false);

  const [sticky, setSticky] = useState(false);

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

  const setNavSticky = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  // HANDLERS
  const onClickSellBtn = () => {
    if (!user) return setShowAuthForm(true);
    Router.replace('/create-post');
  };

  const onClickHeartBtn = () => {
    if (!user) return setShowAuthForm(true);
    Router.replace(`/users/${user?._id}/collections`);
  };

  useEffect(() => {
    window.addEventListener('scroll', setNavSticky, true);
  }, []);

  return (
    <>
      <StickyFillinSpace sticky={sticky} />
      <InnerWrapper sticky={sticky}>
        <HeaderWrapper>
          <div className="logo">
            <Link href="/">
              <a>
                <h2>Utopia</h2>
              </a>
            </Link>
          </div>
          <Searchbar />
          <div className="links">
            <FiHeart size={23} className="icon_btn" onClick={onClickHeartBtn} />
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

            <Button size="x" onClick={onClickSellBtn}>
              Sell
            </Button>

            {user && (
              <>
                <AcBalanceBox />
                <UserIcon user={user} hasUserMenu={true} />
              </>
            )}

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
        <CategoryBar />
      </InnerWrapper>

      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
    </>
  );
};

export default MainHeader;
