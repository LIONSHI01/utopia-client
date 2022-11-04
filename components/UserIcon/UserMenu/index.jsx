import React from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { VscSignOut } from 'react-icons/vsc';

import { MenuWrapper, ContentWrapper } from './index.styles';
import { iconDropdownMenuList } from '../../../assets/constants';
import { UserIcon } from '../../index';

const UserMenuDropdown = ({ user, showUp, setShowUp }) => {
  const router = useRouter();

  return (
    <MenuWrapper showUp={showUp}>
      <ContentWrapper showUp={showUp}>
        <Link href={`/users/${user?._id}`}>
          <a className="userInfo" onClick={() => setShowUp(false)}>
            <UserIcon user={user} size="s" />
            <div className="info-box">
              <span className="name">{user?.name}</span>
              <p>View your profile</p>
            </div>
          </a>
        </Link>
        <div className="navigation-items">
          {iconDropdownMenuList.map((item) => (
            <Link key={item.name} href={`/users/${user?._id}/${item.link}`}>
              <div
                key={item.name}
                className="list-item"
                onClick={() => setShowUp(false)}
              >
                {item.icon}
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <span
          className="signout-btn"
          onClick={() => {
            signOut({ redirect: false });
            router.replace('/');
          }}
        >
          <VscSignOut size={24} />
          Sign Out
        </span>
      </ContentWrapper>
    </MenuWrapper>
  );
};

export default UserMenuDropdown;
