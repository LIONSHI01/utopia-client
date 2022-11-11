import React from 'react';
import Router from 'next/router';

import { Button, BUTTON_TYPES, ProductCard } from '../../index';
import { BoxContainer } from './index.styles';

const PostsDisplayList = ({ posts, heading, viewMoreLink }) => {
  return (
    <BoxContainer>
      <div className="heading">
        <h3>{heading}</h3>
        <Button
          size="x"
          buttonType={BUTTON_TYPES.outlineGrey}
          onClick={() => Router.push(viewMoreLink)}
        >
          See more
        </Button>
      </div>
      <div className="seller-posts">
        {posts?.slice(0, 5)?.map((post) => (
          <ProductCard key={post?._id} post={post} />
        ))}
      </div>
    </BoxContainer>
  );
};

export default PostsDisplayList;
