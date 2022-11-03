import React from 'react';
import Router from 'next/router';

import { BoxContainer } from './index.styles';
import { ProductCard, Button, BUTTON_TYPES } from '../../index';

const MoreFromSeller = ({ posts }) => {
  return (
    <BoxContainer>
      <div className="heading">
        <h3>More from Seller</h3>
        <Button
          size="x"
          buttonType={BUTTON_TYPES.outlineGrey}
          onClick={() =>
            Router.push(`/users/${posts?.[0]?.postedBy?._id}/listings`)
          }
        >
          See more
        </Button>
      </div>
      <div className="seller-posts">
        {posts?.slice(0, 4)?.map((post) => (
          <ProductCard key={post?._id} post={post} />
        ))}
      </div>
    </BoxContainer>
  );
};

export default MoreFromSeller;
