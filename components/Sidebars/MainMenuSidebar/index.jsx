import React, { useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';

import { useGetUserHook } from '../../../utils/reactQueryHooks/fetchUserHook';
import { IoIosArrowForward } from 'react-icons/io';
import { profileLinksMobile } from '../../../assets/constants';
import {
  Overlay,
  UserIcon,
  AcBalanceBox,
  Button,
  BUTTON_TYPES,
  AuthForm,
} from '../../index';
import CategoryList from './CategoryList';

import {
  SidebarContainer,
  UserSummaryWrapper,
  ProfileSectionWrapper,
  ProfileItemWrapper,
  AuthSectionWrapper,
} from './index.styles.js';

const MainMenuSidebar = ({ isOpen, setIsOpen }) => {
  // CONFIGURATION
  const { data } = useSession();
  const user = data?.profile;
  const router = useRouter();

  // STATES
  const [showAuthForm, setShowAuthForm] = useState(false);

  const onClickCloseHandler = () => {
    setIsOpen(false);
  };

  const onClickAuthBtns = () => {
    setIsOpen(false);
    setShowAuthForm(true);
  };

  const onSignOutHandler = () => {
    signOut({ redirect: false });
    setIsOpen(false);
    router.push('/');
  };

  const onClickSellHandler = () => {
    setIsOpen(false);
    router.push('/create-post');
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <UserSummaryWrapper>
          <div className="user_info">
            {user ? (
              <UserIcon user={user} />
            ) : (
              <>
                <Button
                  onClick={onClickAuthBtns}
                  height="100%"
                  width="9rem"
                  buttonType={BUTTON_TYPES.outlineGrey}
                >
                  Sign In
                </Button>
                <Button
                  onClick={onClickAuthBtns}
                  height="100%"
                  width="9rem"
                  buttonType={BUTTON_TYPES.base}
                >
                  Get Start
                </Button>
              </>
            )}
            <h4 className="user_name">{user?.name}</h4>
          </div>
          <AcBalanceBox />
          <Button
            height="100%"
            width="7rem"
            buttonType={BUTTON_TYPES.base}
            onClick={onClickSellHandler}
          >
            Sell
          </Button>
        </UserSummaryWrapper>
        <ProfileSectionWrapper>
          {profileLinksMobile?.map(({ title, path, icon, isPublic }) => (
            <ProfileItemWrapper key={title} onClick={onClickCloseHandler}>
              <Link href={`/users/${user?.id}/${title}`}>
                <a className="item">
                  {icon}
                  <span className="item_name">{title}</span>
                  <span className="item_arrow">
                    <IoIosArrowForward size={20} />
                  </span>
                </a>
              </Link>
            </ProfileItemWrapper>
          ))}
        </ProfileSectionWrapper>
        <CategoryList setSidebarOpen={setIsOpen} />
        {user && (
          <AuthSectionWrapper>
            <div className="buttons_group">
              <Button
                onClick={onSignOutHandler}
                height="4rem"
                width="10rem"
                buttonType={BUTTON_TYPES.outlineGrey}
              >
                Sign Out
              </Button>
            </div>
          </AuthSectionWrapper>
        )}
      </SidebarContainer>
      <AuthForm showAuthForm={showAuthForm} setShowAuthForm={setShowAuthForm} />
      <Overlay showUp={isOpen} setShowUp={setIsOpen} />
    </>
  );
};

export default MainMenuSidebar;
