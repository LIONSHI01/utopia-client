import React from 'react';
import Image from 'next/image';

import { BsShop } from 'react-icons/bs';
import { ImEarth } from 'react-icons/im';

import { ItemWrapper } from './index.styles';
import placeholderImage from '../../../../assets/image/salad.jpg';

const CollectionItem = ({ collection }) => {
  // console.log(collection);
  return (
    <ItemWrapper>
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

      <p>{collection?.name}</p>
      <div className="total-items">
        <ImEarth size={12} />
        <span>{collection?.items?.length || 0}&nbsp;items</span>
      </div>
    </ItemWrapper>
  );
};

export default CollectionItem;
