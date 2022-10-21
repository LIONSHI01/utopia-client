import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const smallSizeStyles = css`
  height: 3rem;
  width: 3rem;
`;

const IconWrapper = styled.div`
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

const UserIcon = ({ username, image, userId, size }) => {
  return (
    <IconWrapper size={size}>
      <Link href={`/user-profile/${userId}`}>
        <a>
          {image ? (
            <img src={image} alt="user" />
          ) : (
            <div className="placeholder">
              <span>{username?.slice(0, 1)}</span>
            </div>
          )}
        </a>
      </Link>
    </IconWrapper>
  );
};

export default UserIcon;
