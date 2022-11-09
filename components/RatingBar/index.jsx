import React, { useState } from 'react';

import { BarContainer } from './index.styles';
import { AiFillStar } from '../ReactIcons';
import { ratingScore } from '../../assets/constants';

const RatingBar = ({ starSize = 20, setScore }) => {
  const [hoverState, setHoverState] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  const onClickHandler = (index) => {
    setScore(index);
    setSelectedRating(index);
  };

  return (
    <BarContainer>
      <div className="starsWrapper">
        {[...Array(5)].map((_, index) => {
          index += 1;

          return (
            <AiFillStar
              key={index}
              size={starSize}
              className={
                hoverState >= index || selectedRating >= index
                  ? 'star active'
                  : 'star'
              }
              onMouseEnter={() => setHoverState(index)}
              onMouseLeave={() => setHoverState(0)}
              onClick={() => onClickHandler(index)}
            />
          );
        })}
      </div>
      <span className="rating_text">
        {ratingScore[hoverState || selectedRating]}
      </span>
    </BarContainer>
  );
};

export default RatingBar;
