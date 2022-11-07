import React, { useState, useEffect } from 'react';

import { PageContainer, ContentsContainer, OrdersList } from './index.styles';

import {
  OrderPreviewItem,
  OrderDetails,
  OrderList,
  OrderDetailBox,
} from '../../../index';

const OrdersMasterSection = ({ user, refetchUser }) => {
  // STATE MANAGEMENT
  const [orders, setOrders] = useState(null);
  const [selectedOrderIndex, setselectedOrderIndex] = useState(0);
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

        {/* <OrdersList>
          {orders?.map((order, i) => (
            <OrderPreviewItem
              key={order?._id}
              order={order}
              onClick={() => setselectedOrderIndex(i)}
            />
          ))}
        </OrdersList> */}
        {/* 
        {orders?.[selectedOrderIndex] && (
          <OrderDetails
            user={user}
            refetchUser={refetchUser}
            order={orders?.[selectedOrderIndex]}
          />
        )} */}
      </ContentsContainer>
    </PageContainer>
  );
};

export default OrdersMasterSection;
