import React from 'react';
import Image from 'next/image';
import Router from 'next/router';

import { useGetUserHook } from '../../../utils/customHooks/fetchUserHook';
import { Button, BUTTON_TYPES, RatingItem } from '../../index';
import { ColumnWrapper } from './index.styles';

const MeetSellerColumn = ({ sellerId }) => {
  const { user: seller } = useGetUserHook({ userId: sellerId });
  const sales = seller?.offers?.filter(
    (offer) => offer.status === 'completed'
  )?.length;

  return (
    <ColumnWrapper>
      <div className="heading">Meet the seller</div>
      <div className="seller-container">
        <div className="seller-image">
          <Image
            src={seller?.photo}
            alt="seller"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className="profile">
          <span className="name">{seller?.name}</span>
          <div className="details">
            <RatingItem rating={4} />

            <div className="item">
              <span>{seller?.posts?.length || 0}</span>
              listed
            </div>
            <div className="item">
              <span>{sales}</span>
              sales
            </div>
          </div>
        </div>
        <div className="buttons-group">
          <Button
            height="4rem"
            width="20rem"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={() => Router.push(`/users/${seller?.id}/listings`)}
          >
            View Profile
          </Button>
          {/* <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
            Message Seller
          </Button> */}
        </div>
      </div>
    </ColumnWrapper>
  );
};

export default MeetSellerColumn;
