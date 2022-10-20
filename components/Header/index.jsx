import React from 'react';
import Link from 'next/link';

import { HiOutlineSearch, HiOutlineMail } from 'react-icons/hi';
import { RiNotification4Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';

import { UserIcon, Button, BUTTON_TYPES, AuthForm } from '../index';

import { HeaderWrapper } from './index.styles';

const MainHeader = () => {
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
          <Link href="/notification">
            <a>
              <RiNotification4Line size={23} color="var(--black-light-2)" />
            </a>
          </Link>
          <Link href="/message">
            <a>
              <HiOutlineMail size={23} color="var(--black-light-2)" />
            </a>
          </Link>
          <Link href="/wishlist">
            <a>
              <FiHeart size={23} color="var(--black-light-2)" />
            </a>
          </Link>

          <Button size="x">Sell</Button>
          {/* Temple test */}
          <UserIcon username="John" />
        </div>
      </HeaderWrapper>
      <AuthForm />
    </>
  );
};

export default MainHeader;
