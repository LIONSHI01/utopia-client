import React, { useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { HiOutlineSearch, HiOutlineMail } from 'react-icons/hi';
import { RiNotification4Line } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi';

import { UserIcon, Button, BUTTON_TYPES, AuthForm } from '../index';

import { HeaderWrapper } from './index.styles';

const MainHeader = () => {
  // STATE MANAGEMENT
  const [showAuthForm, setShowAuthForm] = useState(false);
  const { data: user } = useSession();
  console.log(user);
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
          {user && <UserIcon username={user?.user.name} />}
          {!user && (
            <>
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
            </>
          )}
        </div>
      </HeaderWrapper>
      {showAuthForm && <AuthForm setShowAuthForm={setShowAuthForm} />}
    </>
  );
};

export default MainHeader;
