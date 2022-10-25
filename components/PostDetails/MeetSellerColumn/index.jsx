import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

import { Button, BUTTON_TYPES } from '../../index';
import { ColumnWrapper } from './index.styles';

const MeetSellerColumn = ({ seller }) => {
  // console.log(seller);

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
            <div className="rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <AiFillStar key={i} size={15} />
              ))}
            </div>
            <div className="item">
              <span>10</span>
              reviews
            </div>
            <div className="item">
              <span>20</span>
              listed
            </div>
            <div className="item">
              <span>98</span>
              sales
            </div>
          </div>
        </div>
        <div className="buttons-group">
          <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
            View Profile
          </Button>
          <Button size="full" buttonType={BUTTON_TYPES.outlineGrey}>
            Message Seller
          </Button>
        </div>
      </div>
    </ColumnWrapper>
  );
};

export default MeetSellerColumn;
