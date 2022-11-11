import React from 'react';
import Image from 'next/image';

import { BsShop } from 'react-icons/bs';
import { ImEarth } from 'react-icons/im';

import { ItemWrapper, ImageGridWrapper } from './index.styles';
import placeholderImage from '../../../../assets/image/salad.jpg';

const ImageGrid = ({ images }) => {
  return (
    <ImageGridWrapper>
      {images?.map((image, i) => (
        <div key={i} className="grid_item_container">
          <Image
            src={image}
            alt="collection"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      ))}
    </ImageGridWrapper>
  );
};

const CollectionItem = ({ collection, ...otherProps }) => {
  const displayImagesArr = collection?.items?.map((item) => item?.coverImages);

  return (
    <ItemWrapper {...otherProps}>
      {displayImagesArr?.length > 0 ? (
        <div className="image-container">
          <ImageGrid images={displayImagesArr} />
        </div>
      ) : (
        <div className="placeholder_container">
          <BsShop size={35} className="placeholder_icon" />
        </div>
      )}

      <p>{collection?.name}</p>
      <div className="total-items">
        <ImEarth size={12} />
        <span>{collection?.items?.length || 0}&nbsp;items</span>
      </div>
    </ItemWrapper>
  );
};

export default CollectionItem;
