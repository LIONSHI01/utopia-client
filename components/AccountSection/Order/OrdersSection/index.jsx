import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import {
  PageContainer,
  ContentsContainer,
  EmptyOrderWrapper,
} from './index.styles';

import {
  OrderList,
  OrderDetailBox,
  Button,
  EmptyReminderBox,
} from '../../../index';

const OrdersMasterSection = ({ user, refetchUser }) => {
  // STATE MANAGEMENT
  const [orders, setOrders] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(user?.orders?.[0]);
  const [selectedOrderId, setSelectedOrderId] = useState('');

  useEffect(() => {
    setOrders(user?.orders);
    setSelectedOrder(
      user?.orders?.filter((offer) => offer?.id === selectedOrderId)?.[0] ||
        user?.orders?.[0]
    );
  }, [user, selectedOrderId]);

  if (user?.orders?.length === 0) {
    return (
      <EmptyReminderBox
        message="No order yet."
        fontSize="2.5rem"
        buttonText="Let's Explore !"
        buttonHeight="4rem"
        buttonWidth="14rem"
        link="/"
      />
    );
  }

  return (
    <PageContainer>
      <ContentsContainer>
        <OrderList
          orders={orders}
          setSelectedOrder={setSelectedOrder}
          setSelectedOrderId={setSelectedOrderId}
        />

        <OrderDetailBox
          user={user}
          refetchUser={refetchUser}
          order={selectedOrder}
        />
      </ContentsContainer>
    </PageContainer>
  );
};

export default OrdersMasterSection;
