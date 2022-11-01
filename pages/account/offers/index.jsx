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
  // OrderDetails,
  OfferDetails,
} from '../../../components';
import { getUserOffers } from '../../../utils/apiData/orderRequest';

const ProfileOffersPage = () => {
  const { data } = useSession();

  const user = data?.profile;
  // STATE MANAGEMENT
  const [offers, setOffers] = useState(null);
  const [selectedOrderIndex, setselectedOrderIndex] = useState(0);

  console.log('offers', offers);
  // useQuery fetching data
  const {
    isLoading,
    data: postsData,
    isError,
    error,
    refetch: refetchOffers,
  } = useQuery(['userOffers', user?._id], () => getUserOffers(user?._id), {
    onSuccess: (data) => setOffers(data),
    onError: (error) => {
      console.log('encounter an error during fetching ==> ', error);
    },
    enabled: !!user?._id,
  });
  console.log('user', user);
  return (
    <PageContainer>
      <MenuSidebar user={user} />
      <ContentsContainer>
        <h3 className="heading">Your Offers</h3>
        <OrdersList>
          {offers?.map((order, i) => (
            <OrderPreviewItem
              key={order?._id}
              order={order}
              onClick={() => setselectedOrderIndex(i)}
            />
          ))}
        </OrdersList>

        {offers?.[selectedOrderIndex] && (
          <OfferDetails
            user={user}
            refetchOrders={refetchOffers}
            order={offers?.[selectedOrderIndex]}
          />
        )}
      </ContentsContainer>
    </PageContainer>
  );
};

export default ProfileOffersPage;
