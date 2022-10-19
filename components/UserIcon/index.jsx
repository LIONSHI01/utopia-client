import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const IconWrapper = styled.div`
  .placeholder {
    height: 3.7rem;
    width: 3.7rem;
    background-color: var(--primary);
    color: var(--white);
    font-size: var(--fs);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }
`;

const UserIcon = ({ username, image, userId }) => {
  return (
    <IconWrapper>
      <Link href={`/user-profile/${userId}`}>
        <a>
          {image ? (
            <img src="" />
          ) : (
            <div className="placeholder">{username?.slice(0, 1)}</div>
          )}
        </a>
      </Link>
    </IconWrapper>
  );
};

export default UserIcon;
