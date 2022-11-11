import Router from 'next/router';
import React from 'react';

import { Button } from '../../../index';
import { EmptyItemContainer } from './index.styles';

const EmptyReminderBox = ({
  message,
  buttonText,
  buttonWidth,
  buttonHeight,
  fontSize,
  link,
  isAuthenticated = true,
  onClickFn,
}) => {
  const onClickHandler = () => {
    onClickFn && onClickFn();
    link && Router.push(link);
  };

  return (
    <EmptyItemContainer fontSize={fontSize}>
      <p className="empty_listing_reminder">{message}</p>
      {isAuthenticated && buttonText && (
        <Button
          height={buttonHeight}
          width={buttonWidth}
          onClick={onClickHandler}
        >
          {buttonText}
        </Button>
      )}
    </EmptyItemContainer>
  );
};

export default EmptyReminderBox;
