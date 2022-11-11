import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { useDispatch } from 'react-redux';

import {
  PageContainer,
  ContentsContainer,
  EmptyOfferWrapper,
} from './index.styles';
import OfferDetailsBox from '../OfferDetailsBox';
import { OrderList, Button } from '../../../index';

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
      <PageContainer>
        <EmptyOfferWrapper>
          <p>No offer yet.</p>
          <Button size="x" onClick={() => Router.push('/create-post')}>
            List Your First Item !
          </Button>
        </EmptyOfferWrapper>
      </PageContainer>
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
