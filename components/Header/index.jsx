import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Router from 'next/router';

import { ThemeToggler } from '../index';
import { useGetUserHook } from '../../utils/customHooks/fetchUserHook';
import { useClaimFaucet } from '../../utils/customHooks/useClaimFaucet';
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
  Overlay,
  MessageBanner,
  FaucetModal,
  WaitingModal,
} from '../index';

import { HeaderWrapper, InnerWrapper, StickyFillinSpace } from './index.styles';

const MainHeader = ({ theme, setTheme }) => {
  // CONFIGURATION
  const ref = useRef();
  const { data } = useSession();
  const { user, refetch: refetchUser } = useGetUserHook({
    userId: data?.profile?._id,
  });
  const {
    isClaiming,
    onSubmitClaimHandler,
    showFaucetModal,
    setShowFaucetModal,
    showWaitingModal,
    setShowWaitingModal,
    waitModalTitle,
    waitModalMsg,
    waitingModalLink,
  } = useClaimFaucet();

  // STATE MANAGEMENT
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showNotiDropdown, setShowNotiDropdown] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

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
          <Searchbar
            setShowOverlay={setShowOverlay}
            showOverlay={showOverlay}
          />
          <div className="links">
            <div className="link">
              <FiHeart size={25} onClick={onClickHeartBtn} />
            </div>
            <div
              className="link"
              onClick={() => setShowNotiDropdown((prev) => !prev)}
              ref={ref}
            >
              <RiNotification4Line size={25} />

              <div className="noti-number">
                <span>{user?.notifications.length || 0}</span>
              </div>
              <NotificationDropdown
                user={user}
                refetchUser={refetchUser}
                notifications={user?.notifications}
                showUp={showNotiDropdown}
                setShowUp={setShowNotiDropdown}
              />
            </div>
            <ThemeToggler size={25} theme={theme} setTheme={setTheme} />
            <Button
              height="4rem"
              width="6rem"
              fonsSize="1.6rem"
              onClick={onClickSellBtn}
            >
              Sell
            </Button>

            {data && (
              <>
                {user?.walletAddress && <AcBalanceBox />}
                <UserIcon user={user} hasUserMenu={true} outline={true} />
              </>
            )}

            {!data && (
              <div className="auth-buttons">
                <Button
                  height="4rem"
                  width="8rem"
                  fonsSize="1.6rem"
                  buttonType={BUTTON_TYPES.outlineGrey}
                  onClick={() => setShowAuthForm(true)}
                >
                  Sign In
                </Button>
                <Button
                  height="4rem"
                  width="11rem"
                  fonsSize="1.6rem"
                  buttonType={BUTTON_TYPES.base}
                  onClick={() => setShowAuthForm(true)}
                >
                  Get Started
                </Button>
              </div>
            )}
          </div>
        </HeaderWrapper>
        <CategoryBar />
        {showBanner && (
          <MessageBanner
            setShowup={setShowBanner}
            popOutFn={setShowFaucetModal}
          />
        )}
      </InnerWrapper>
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
      <Overlay zIndex={101} setShowUp={setShowOverlay} showUp={showOverlay} />

      <FaucetModal
        showup={showFaucetModal}
        setShowup={setShowFaucetModal}
        onSubmitClaimHandler={onSubmitClaimHandler}
      />
      <WaitingModal
        title={waitModalTitle}
        message={waitModalMsg}
        url={waitingModalLink}
        isLoading={isClaiming}
        showup={showWaitingModal}
        setShowup={setShowWaitingModal}
      />
    </>
  );
};

export default MainHeader;
