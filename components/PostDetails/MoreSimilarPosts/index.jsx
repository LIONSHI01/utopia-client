import React from 'react';
import Router from 'next/router';
import { ProductCard, Button, BUTTON_TYPES } from '../../index';
import { BoxContainer } from './index.styles';

const SimilarPostsBox = ({ posts, category, subCategory }) => {
  return (
    <BoxContainer>
      <div className="heading">
        <h3>More Similar Items</h3>
        <Button
          size="x"
          buttonType={BUTTON_TYPES.outlineGrey}
          onClick={() => Router.push(`/products/${category}/${subCategory}`)}
        >
          See more
        </Button>
      </div>
      <div className="similar-posts">
        {posts?.slice(0, 4)?.map((post) => (
          <ProductCard key={post?._id} post={post} />
        ))}
      </div>
    </BoxContainer>
  );
};

export default SimilarPostsBox;
