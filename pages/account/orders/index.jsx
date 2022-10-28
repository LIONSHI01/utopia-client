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
  const [selectedOrder, setselectedOrder] = useState(null);

  // useQuery fetching data
  const onSuccess = (data) => {
    setOrders(data);
    setselectedOrder(data[0]);
  };

  const onError = (error) => {
    console.log('encounter an error during fetching ==> ', error);
  };

  const {
    isLoading,
    data: postsData,
    isError,
    error,
  } = useQuery(['userOrders', user?._id], () => getUserOrders(user?._id), {
    onSuccess,
    onError,
    enabled: !!user?._id,
  });

  // useEffect(() => {
  //   const getUserOrdersHandler = async () => {
  //     const data = await getUserOrders(user?._id);
  //     setOrders(data);
  //     setselectedOrder(data[0]);
  //   };
  //   if (user?._id) {
  //     getUserOrdersHandler();
  //   }
  // }, [user?._id]);

  return (
    <PageContainer>
      <MenuSidebar user={user} />
      <ContentsContainer>
        <h3 className="heading">Your Orders</h3>
        <OrdersList>
          {orders?.map((order) => (
            <OrderPreviewItem
              key={order?._id}
              order={order}
              onClick={() => setselectedOrder(order)}
            />
          ))}
        </OrdersList>
        <OrderDetails order={selectedOrder} />
      </ContentsContainer>
    </PageContainer>
  );
};

export default ProfileOrdersPage;
