import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { PageContainer, ContentsContainer } from './index.styles';
import OfferDetailsBox from '../OfferDetailsBox';
import { OrderList, EmptyReminderBox } from '../../../index';

const OffersMasterSection = ({ user, refetchUser }) => {
  const dispatch = useDispatch();
  // STATE MANAGEMENT
  const [offers, setOffers] = useState(null);
  const [selectedOffer, setSelectedOffer] = useState(user?.offers?.[0]);
  const [selectedOrderId, setSelectedOrderId] = useState('');

  useEffect(() => {
    setOffers(user?.offers);
    setSelectedOffer(
      user?.offers?.filter((offer) => offer?.id === selectedOrderId)?.[0] ||
        user?.offers?.[0]
    );
  }, [user, selectedOrderId]);

  if (user?.offers?.length === 0) {
    return (
      <EmptyReminderBox
        message="No offer yet."
        fontSize="2.5rem"
        buttonText="Let's List One !"
        buttonHeight="4rem"
        buttonWidth="14rem"
        link="/create-post"
      />
    );
  }

  return (
    <PageContainer>
      <ContentsContainer>
        <OrderList
          orders={offers}
          setSelectedOrder={setSelectedOffer}
          setSelectedOrderId={setSelectedOrderId}
        />

        <OfferDetailsBox
          user={user}
          refetchUser={refetchUser}
          order={selectedOffer}
        />
      </ContentsContainer>
    </PageContainer>
  );
};

export default OffersMasterSection;
