import React, { useState } from 'react';
import Image from 'next/image';
import { AiFillCloseCircle } from 'react-icons/ai';

import {
  DisplayModalContainer,
  DisplayedImageWrapper,
  ThumbnailColumn,
} from './index.styles';

const ImageDisplayModal = ({ images, setShowDisplayModal }) => {
  const [displayIndex, setDisplayIndex] = useState(0);

  return (
    <DisplayModalContainer>
      <DisplayedImageWrapper>
        <div className="display-image-container">
          <Image
            src={images && images[displayIndex]}
            alt="post-image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </DisplayedImageWrapper>
      <ThumbnailColumn>
        {images?.map((image, i) => (
          <div
            key={i}
            className={displayIndex === i ? 'thumbnail active' : 'thumbnail'}
            onClick={() => setDisplayIndex(i)}
          >
            <Image
              src={image}
              alt="post-image"
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        ))}
      </ThumbnailColumn>
      <div className="close-btn" onClick={() => setShowDisplayModal(false)}>
        <AiFillCloseCircle size={40} />
      </div>
    </DisplayModalContainer>
  );
};

export default ImageDisplayModal;
