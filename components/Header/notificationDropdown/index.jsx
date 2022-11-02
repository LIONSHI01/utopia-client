import React from 'react';

import { RiAuctionFill } from 'react-icons/ri';

import { MdLocalOffer } from 'react-icons/md';
import { BsHouseFill } from 'react-icons/bs';

import {
  DropdownWrapper,
  MessageItemWrapper,
  MasterContainer,
  ContentContainer,
  HostIcon,
  OrderIcon,
  OfferIcon,
} from './index.styles';

const MessageItem = ({ message }) => {
  const { content, type } = message || {};
  const getIcon = (messageType) => {
    if (messageType === 'system')
      return (
        <HostIcon>
          <BsHouseFill size={15} className="icon" />
        </HostIcon>
      );

    if (messageType === 'order')
      return (
        <OrderIcon>
          <RiAuctionFill size={15} className="icon" />
        </OrderIcon>
      );
    if (messageType === 'offer')
      return (
        <OfferIcon>
          <MdLocalOffer size={15} className="icon" />
        </OfferIcon>
      );
  };

  const CustomIcon = getIcon(type);

  return (
    <MessageItemWrapper>
      <div className="type">{CustomIcon}</div>
      <div className="contents">{content}</div>
      <div className="period">2d</div>
    </MessageItemWrapper>
  );
};

const NotificationDropdown = ({ notifications, showUp, setShowUp }) => {
  return (
    <DropdownWrapper showUp={showUp}>
      <MasterContainer>
        <div className="heading">Notifications</div>
        <ContentContainer>
          {notifications?.map((item) => (
            <MessageItem key={item?._id} message={item} />
          ))}
        </ContentContainer>
      </MasterContainer>
    </DropdownWrapper>
  );
};

export default NotificationDropdown;
