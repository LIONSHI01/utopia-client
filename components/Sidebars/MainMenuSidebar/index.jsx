import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { useGetUserHook } from '../../../utils/reactQueryHooks/fetchUserHook';
import { IoIosArrowForward } from 'react-icons/io';
import { profileLinksMobile } from '../../../assets/constants';
import {
  Overlay,
  UserIcon,
  AcBalanceBox,
  Button,
  BUTTON_TYPES,
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
  const { data } = useSession();
  const { user } = useGetUserHook({ userId: data?.profile?.id });
  // console.log('sidebar-user:', user);
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <UserSummaryWrapper>
          <div className="user_info">
            <UserIcon user={user} />
            <h4 className="user_name">{user?.name}</h4>
          </div>
          <AcBalanceBox />
        </UserSummaryWrapper>
        <ProfileSectionWrapper>
          {profileLinksMobile?.map(({ title, path, icon, isPublic }) => (
            <ProfileItemWrapper key={title}>
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
        <CategoryList />
        <AuthSectionWrapper>
          <div className="buttons_group">
            <Button
              height="3rem"
              width="10rem"
              buttonType={BUTTON_TYPES.outlineGrey}
            >
              Sign In
            </Button>
            <Button height="3rem" width="10rem" buttonType={BUTTON_TYPES.base}>
              Get Start
            </Button>
          </div>
        </AuthSectionWrapper>
      </SidebarContainer>
      <Overlay showUp={isOpen} setShowUp={setIsOpen} />
    </>
  );
};

export default MainMenuSidebar;
