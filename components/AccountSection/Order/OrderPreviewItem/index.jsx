import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { GrStatusGoodSmall } from 'react-icons/gr';

import { ItemWrapper } from './index.styles';

const OrderPreviewItem = ({ order, ...otherProps }) => {
  return (
    <ItemWrapper {...otherProps}>
      <div className="post-image">
        <Image
          src={order?.post?.images[0]}
          alt={order?.post?.title}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <div className="details">
        <p className="title">{order?.post?.title}</p>
        {/* <span className="since">Since {order?.createdAt?.split('T')[0]}</span>
        <div className="status">
          <GrStatusGoodSmall size={17} />
          <span>Status: {order?.status}</span>
        </div> */}
      </div>
    </ItemWrapper>
  );
};

export default OrderPreviewItem;
