import React, { useState, useEffect } from 'react';

import { PageContainer, ContentsContainer, OrdersList } from './index.styles';

import { OrderPreviewItem, OfferDetails } from '../../../index';

const OffersMasterSection = ({ user, refetchUser }) => {
  // STATE MANAGEMENT
  const [offers, setOffers] = useState(null);
  const [selectedOrderIndex, setselectedOrderIndex] = useState(0);

  useEffect(() => {
    setOffers(user?.offers);
    setselectedOrderIndex(0);
  }, [user]);

  console.log('Offer Section:', offers);

  return (
    <PageContainer>
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
            refetchUser={refetchUser}
            order={offers?.[selectedOrderIndex]}
          />
        )}
      </ContentsContainer>
    </PageContainer>
  );
};

export default OffersMasterSection;
