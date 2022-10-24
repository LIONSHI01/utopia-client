import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

import { ColumnWrapper } from './index.styles';

const MeetSellerColumn = ({ seller }) => {
  console.log(seller);

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
            <span className="reviews">10 reviews</span>
            <span className="lists">20 listed</span>
            <span className="sales">12 sales</span>
          </div>
        </div>
      </div>
    </ColumnWrapper>
  );
};

export default MeetSellerColumn;
