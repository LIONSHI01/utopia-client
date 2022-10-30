import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';

import {
  PageContainer,
  ContentsContainer,
  OrdersList,
} from '../../../pages_styles/profile-orders.styles';
import {
  MenuSidebar,
  OrderPreviewItem,
  OrderDetails,
} from '../../../components';
import { getUserOrders } from '../../../utils/apiData/orderRequest';

const ProfileOrdersPage = () => {
  const { data } = useSession();

  const user = data?.profile;

  // STATE MANAGEMENT
  const [orders, setOrders] = useState(null);
  const [selectedOrderIndex, setselectedOrderIndex] = useState(0);

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

  return (
    <PageContainer>
      <MenuSidebar user={user} />
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
            refetchOrders={refetchOrders}
            order={orders?.[selectedOrderIndex]}
          />
        )}
      </ContentsContainer>
    </PageContainer>
  );
};

export default ProfileOrdersPage;
