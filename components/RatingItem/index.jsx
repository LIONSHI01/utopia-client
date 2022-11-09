import React from 'react';
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const ItemWrapper = styled.div`
  display: flex;
  .star {
    color: var(--yellow);
  }
`;

const RatingItem = ({ rating, starSize }) => {
  return (
    <ItemWrapper>
      {[...Array(5)].map((_, index) => {
        index += 1;
        if (rating >= index)
          return <AiFillStar key={index} size={starSize} className="star" />;
      })}
    </ItemWrapper>
  );
};

export default RatingItem;
