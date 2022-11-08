import React, { useState, useEffect } from 'react';

import { PageContainer, ContentsContainer, OrdersList } from './index.styles';

import { OrderList, OrderDetailBox } from '../../../index';

const OrdersMasterSection = ({ user, refetchUser }) => {
  // STATE MANAGEMENT
  const [orders, setOrders] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(user?.orders?.[0]);

  useEffect(() => {
    setOrders(user?.orders);
  }, [user]);
  console.log(selectedOrder);
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
