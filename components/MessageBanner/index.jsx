import React from 'react';
import { BannerWrapper } from './index.styles';

import { IoMdClose } from '../ReactIcons';

const MessageBanner = ({ setShowup, popOutFn }) => {
  return (
    <BannerWrapper onClick={() => popOutFn(true)}>
      <p>
        Please claim test GoerliETH to test the application by clicking this
        banner on desktop !
      </p>
      <IoMdClose
        size={15}
        className="close-btn"
        onClick={(e) => {
          e.stopPropagation();
          setShowup(false);
        }}
      />
    </BannerWrapper>
  );
};

export default MessageBanner;
