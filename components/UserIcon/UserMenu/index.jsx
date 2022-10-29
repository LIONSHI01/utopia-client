import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { VscSignOut } from 'react-icons/vsc';

import { MenuWrapper } from './index.styles';
import { iconDropdownMenuList } from '../../../assets/constants';

// const menuList = [
//   {
//     name: 'My collections',
//     link: '/account/collections',
//   },
//   {
//     name: 'Manage orders',
//     link: '/account/orders',
//   },
//   {
//     name: 'Manage Offers',
//     link: '/account/offers',
//   },
//   {
//     name: 'Settings',
//     link: '/account/settings',
//   },
// ];

const UserMenuDropdown = ({ setShowUp }) => {
  const router = useRouter();

  return (
    <MenuWrapper>
      {iconDropdownMenuList.map((item) => (
        <Link key={item.name} href={item.link}>
          <a className="list-item" onClick={() => setShowUp(false)}>
            {item.icon}
            {item.name}
          </a>
        </Link>
      ))}
      <span
        className="signout-btn"
        onClick={() => {
          signOut({ redirect: false });
          router.replace('/');
        }}
      >
        <VscSignOut size={19} />
        Sign Out
      </span>
    </MenuWrapper>
  );
};

export default UserMenuDropdown;
