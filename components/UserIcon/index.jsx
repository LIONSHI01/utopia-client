import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import { FaUserCircle, RiUserFill } from '../ReactIcons/index';

import UserMenuDropdown from './UserMenu';

const smallSizeStyles = css`
  height: 3rem;
  width: 3rem;
`;

const xsSizeStyles = css`
  height: 2rem;
  width: 2rem;
`;

const outlineStyles = css`
  outline: 2px solid var(--primary);
  outline-offset: 1px;
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

    ${(props) => props.outline && outlineStyles}
    ${(props) => props.size === 's' && smallSizeStyles}
    ${(props) => props.size === 'xs' && xsSizeStyles}
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
  }
  .placeholderContainer {
    display: flex;
    gap: 1rem;
    align-items: center;

    span {
      font-size: var(--fs);
    }
  }

  .placeholderIconContainer {
    background-color: ${({ theme }) => theme.textLight3};
    border-radius: 100px;
    height: 3.7rem;
    width: 3.7rem;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => props.outline && outlineStyles}
    ${(props) => props.size === 's' && smallSizeStyles}
    ${(props) => props.size === 'xs' && xsSizeStyles}
  }

  .placeholderIcon {
    height: 3rem;
    width: 3rem;

    ${(props) => props.outline && outlineStyles}
    ${(props) => props.size === 's' && smallSizeStyles}
    ${(props) => props.size === 'xs' && xsSizeStyles}
 
    color: var(--primary);
  }
`;

const UserIcon = ({
  user,
  size,
  hasUserMenu = false,
  outline = false,
  placeHolder = false,
  ...otherProps
}) => {
  const ref = useRef();

  const [showUserMenu, setShowUserMenu] = useState(false);

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

  if (placeHolder) {
    return (
      <IconWrapper size={size} ref={ref} outline={outline} {...otherProps}>
        <div className="placeholderContainer">
          <div className="placeholderIconContainer">
            <RiUserFill className="placeholderIcon" />
          </div>
          <span>Visitor</span>
        </div>
      </IconWrapper>
    );
  }

  return (
    <IconWrapper size={size} ref={ref} outline={outline} {...otherProps}>
      <div
        className="icon-container"
        onClick={() => setShowUserMenu((prev) => !prev)}
      >
        {user?.photo ? (
          <div className="user-image-box">
            <Image
              src={user?.photo}
              alt="user"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ) : (
          <div className="placeholder">
            <span>{user?.name?.slice(0, 1)}</span>
          </div>
        )}
      </div>
      {hasUserMenu && (
        <UserMenuDropdown
          user={user}
          showUp={showUserMenu}
          setShowUp={setShowUserMenu}
        />
      )}
    </IconWrapper>
  );
};

export default UserIcon;
