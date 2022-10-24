import React from 'react';
import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

import { UserIcon, Button, BUTTON_TYPES } from '../../index';
import { BoxWrapper } from './index.styles';

const SellerInfoBox = ({ seller }) => {
  return (
    <BoxWrapper>
      <div className="upperBox">
        <Link href={`/users/${seller?._id}`}>
          <a className="seller-info">
            <UserIcon user={seller} />
            <span>{seller?.name}</span>
          </a>
        </Link>

        <div className="follow-btn">
          <Button size="x" buttonType={BUTTON_TYPES.outlineGrey}>
            Follow
          </Button>
        </div>
      </div>
      <div className="lowerBox">
        <div className="sales">98 sales</div>
        <div className="rates">
          {[1, 2, 3, 4, 5].map((item, i) => (
            <AiFillStar key={i} size={15} />
          ))}
        </div>
      </div>
    </BoxWrapper>
  );
};

export default SellerInfoBox;
