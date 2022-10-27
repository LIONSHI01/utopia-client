import React from 'react';
import Link from 'next/link';

import { AiTwotoneEdit } from 'react-icons/ai';
import { SectionContainer } from './index.styles';

const OrderDetails = ({ order }) => {
  return (
    <SectionContainer>
      <h3 className="heading">Order Details</h3>
      <div className="order-details">
        <div className="row">
          <span className="title">Order Id:</span>
          <div className="contents">
            <span>{order?._id}</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Order date:</span>
          <div className="contents">
            <span> {order?.createdAt?.split('T')[0]}</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Order status:</span>
          <div className="contents">
            <span className="status"> {order?.status}</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Item name:</span>
          <div className="contents">
            <span> {order?.post?.title}</span>
            <Link
              href={`/products/${order?.post?.category}/${order?.post?.subCategory}/${order?.post?.slug}/${order?.post?._id}`}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="detailsLink"
              >
                (Details...)
              </a>
            </Link>
          </div>
        </div>
        <div className="row">
          <span className="title">Value:</span>
          <div className="contents">
            <span>${order?.post?.price}</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Transaction hash:</span>
          <div className="contents">
            <span className="transactionHash">
              {order?.transactionHash ||
                'Please provide your payment transaction hash for payment validation'}
            </span>
            <AiTwotoneEdit size={15} className="copy-icon" />
          </div>
        </div>
        <div className="row">
          <span className="title">Transaction validation:</span>
          <div className="contents">
            <span className="validation">Completed</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Your payment address:</span>
          <div className="contents">
            <span>
              {order?.from ||
                'Please provide your payment address payment validation'}
            </span>
            <AiTwotoneEdit size={15} className="copy-icon" />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default OrderDetails;
