import React from 'react';

import { RiAuctionFill } from 'react-icons/ri';
import { AiFillTag } from 'react-icons/ai';
import { BsHouseFill } from 'react-icons/bs';

import {
  DropdownWrapper,
  MessageItemWrapper,
  MasterContainer,
  ContentContainer,
  HostIcon,
  OrderIcon,
} from './index.styles';

const MessageItem = ({ message }) => {
  const { content, type } = message || {};
  const getIcon = (messageType) => {
    if (messageType === 'sign_up')
      return (
        <HostIcon>
          <BsHouseFill size={15} className="icon" />
        </HostIcon>
      );

    if (messageType === 'order')
      return (
        <OrderIcon>
          <RiAuctionFill size={15} className="icon" />;
        </OrderIcon>
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
  console.log(notifications);
  return (
    <DropdownWrapper showUp={showUp}>
      <MasterContainer>
        <ContentContainer>
          <div className="heading">Notifications</div>
          {notifications?.map((item) => (
            <MessageItem key={item?._id} message={item} />
          ))}
        </ContentContainer>
      </MasterContainer>
    </DropdownWrapper>
  );
};

export default NotificationDropdown;
