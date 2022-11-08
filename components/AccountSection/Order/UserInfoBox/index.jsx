import React from 'react';
import Link from 'next/link';

import { BoxContainer } from './index.styles';
import { UserIcon } from '../../../index';

const UserInfoBox = ({ seller, buyer }) => {
  console.log('seller', seller);
  if (buyer)
    return (
      <BoxContainer>
        <h4 className="heading">Buyer Info</h4>
        <Link href={`/users/${buyer?.id}/collections`}>
          <a className="userInfo_top">
            <UserIcon user={buyer} />
            <div className="username">{buyer?.name}</div>
          </a>
        </Link>
        <div className="shippingAddress">
          <h5 className="shippingAddress_heading">Shipping Address:</h5>
          <p>{buyer?.shipping_address}</p>
        </div>
      </BoxContainer>
    );

  if (seller)
    return (
      <BoxContainer>
        <h4 className="heading">Seller Info</h4>
        <div className="info_box">
          <Link href={`/users/${seller?.id}/collections`}>
            <a className="userInfo_top">
              <UserIcon user={seller} />
              <div className="username">{seller?.name}</div>
            </a>
          </Link>
          <div className="follow_info">
            <span>{seller?.followers?.length || 0} followers</span>
            <span>{seller?.followings?.length || 0} followings</span>
          </div>
        </div>
        <div className="bio">
          <h5 className="bio_heading">About me:</h5>
          <p>{seller?.bio || 'Hi there, nothing about me yet.'}</p>
        </div>
      </BoxContainer>
    );
};

export default UserInfoBox;
