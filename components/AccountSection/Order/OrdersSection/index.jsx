import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';

import { PageContainer, ContentsContainer, OrdersList } from './index.styles';
import { OrderPreviewItem, OrderDetails } from '../../../index';

const OrdersMasterSection = ({ user, refetchUser }) => {
  // STATE MANAGEMENT
  const [orders, setOrders] = useState(null);
  const [selectedOrderIndex, setselectedOrderIndex] = useState(0);

  useEffect(() => {
    setOrders(user?.orders);
  }, [user]);

  return (
    <PageContainer>
      <ContentsContainer>
        <h3 className="heading">Orders</h3>
        <OrdersList>
          {orders?.map((order, i) => (
            <OrderPreviewItem
              key={order?._id}
              order={order}
              onClick={() => setselectedOrderIndex(i)}
            />
          ))}
        </OrdersList>

        {orders?.[selectedOrderIndex] && (
          <OrderDetails
            user={user}
            refetchUser={refetchUser}
            order={orders?.[selectedOrderIndex]}
          />
        )}
      </ContentsContainer>
    </PageContainer>
  );
};

export default OrdersMasterSection;
