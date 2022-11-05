import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const ItemWrapper = styled.div`
  .star {
    color: var(--yellow);
  }
`;

const RatingItem = ({ rating, size }) => {
  return (
    <ItemWrapper>
      {[...Array(5)].map((star, index) => {
        index += 1;
        if (rating >= index) return <AiFillStar size={size} className="star" />;
      })}
    </ItemWrapper>
  );
};

export default RatingItem;
