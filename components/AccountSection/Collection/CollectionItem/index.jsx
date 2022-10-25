import React from 'react';
import Image from 'next/image';

import { BsShop } from 'react-icons/bs';
import { ImEarth } from 'react-icons/im';

import { ItemWrapper } from './index.styles';
import placeholderImage from '../../../../assets/image/salad.jpg';

const CollectionItem = () => {
  return (
    <ItemWrapper>
      <div className="outliner" />
      <div className="image-container">
        {placeholderImage ? (
          <Image
            src={placeholderImage}
            alt="collection"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        ) : (
          <BsShop size={25} />
        )}
      </div>

      <p>Favorite items</p>
      <div className="total-items">
        <ImEarth size={12} />
        <span>5 items</span>
      </div>
    </ItemWrapper>
  );
};

export default CollectionItem;
