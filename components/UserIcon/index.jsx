import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled, { css } from 'styled-components';

import UserMenuDropdown from './UserMenu';

const smallSizeStyles = css`
  height: 3rem;
  width: 3rem;
`;

const IconWrapper = styled.div`
  position: relative;

  .icon-container {
    cursor: pointer;
  }

  .user-image-box {
    position: relative;
    height: 3.7rem;
    width: 3.7rem;
    border-radius: 100px;
    overflow: hidden;
  }

  .placeholder {
    height: 3.7rem;
    width: 3.7rem;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;

    span {
      color: var(--white);
      line-height: 0;
      font-size: var(--fs);
      text-transform: uppercase;
    }

    ${(props) => props.size === 's' && smallSizeStyles}
  }
`;

const UserIcon = ({ user, size, hasUserMenu = false }) => {
  const ref = useRef();

  const [showUserMenu, setShowUserMenu] = useState(false);

  console.log(user?.profile?.photo);
  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (showUserMenu && !ref.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickOutside, true);

    return () => {
      window.removeEventListener('mousedown', checkIfClickOutside, true);
    };
  }, [showUserMenu]);

  return (
    <IconWrapper size={size} ref={ref}>
      <div
        className="icon-container"
        onClick={() => setShowUserMenu((prev) => !prev)}
      >
        {user?.profile?.photo ? (
          <div className="user-image-box">
            <Image
              src={user?.profile?.photo}
              alt="user"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ) : (
          <div className="placeholder">
            <span>{user?.profile?.name?.slice(0, 1)}</span>
          </div>
        )}
      </div>
      {hasUserMenu && showUserMenu && <UserMenuDropdown />}
    </IconWrapper>
  );
};

export default UserIcon;
