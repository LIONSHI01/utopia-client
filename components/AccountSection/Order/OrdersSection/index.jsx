import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';

import { PageContainer, ContentsContainer, OrdersList } from './index.styles';
import { OrderPreviewItem, OrderDetails } from '../../../index';

const OrdersMasterSection = ({ user, refetchUser }) => {
  // const { data } = useSession();
  // const user = data?.profile;

  // STATE MANAGEMENT
  const [orders, setOrders] = useState(null);
  const [selectedOrderIndex, setselectedOrderIndex] = useState(0);

  console.log('From orders', orders);
  console.log('From orders', user);
  // useQuery fetching data
  const {
    isLoading,
    data: postsData,
    isError,
    error,
    refetch: refetchOrders,
  } = useQuery(['userOrders', user?._id], () => getUserOrders(user?._id), {
    onSuccess: (data) => setOrders(data),
    onError: (error) => {
      console.log('encounter an error during fetching ==> ', error);
    },
    enabled: !!user?._id,
  });

  useEffect(() => {
    setOrders(user?.orders);
  }, [user]);

  return (
    <PageContainer>
      <ContentsContainer>
        <h3 className="heading">Your Orders</h3>
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
