import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import {
  PageContainer,
  ContentsContainer,
  EmptyOrderWrapper,
} from './index.styles';

import { OrderList, OrderDetailBox, Button } from '../../../index';

const OrdersMasterSection = ({ user, refetchUser }) => {
  // STATE MANAGEMENT
  const [orders, setOrders] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(user?.orders?.[0]);

  useEffect(() => {
    setOrders(user?.orders);
    setSelectedOrder(user?.orders?.[0]);
  }, [user]);

  if (user?.orders?.length === 0) {
    return (
      <PageContainer>
        <EmptyOrderWrapper>
          <p>No order yet.</p>
          <Button size="x" onClick={() => Router.push('/')}>
            Let&#39;s Explore !
          </Button>
        </EmptyOrderWrapper>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ContentsContainer>
        <OrderList orders={orders} setSelectedOrder={setSelectedOrder} />

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
