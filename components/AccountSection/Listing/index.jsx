import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { AiOutlinePlus } from '../../ReactIcons';

import {
  SectionContainer,
  ContentsContainer,
  CreateButtonWrapper,
  DisplayList,
} from './index.styles';

import { ProductCard, EmptyReminderBox } from '../../index';

const CreateButton = ({ ...otherProps }) => (
  <CreateButtonWrapper {...otherProps}>
    <AiOutlinePlus size={25} color="var(--white)" />
    <span>List item</span>
  </CreateButtonWrapper>
);

const ListingsMasterSection = ({ user, isAuthenticated }) => {
  // CONFIGURATION
  const router = useRouter();

  // STATE MANAGEMENT
  const [listings, setListings] = useState(null);

  useEffect(() => {
    // Filter only ACTIVE posts
    setListings(user?.posts?.filter((post) => post?.active === true));
  }, [user]);

  if (listings?.length === 0)
    return (
      <EmptyReminderBox
        message="No listing yet."
        buttonText="Let's List One !"
        buttonWidth="15rem"
        buttonHeight="4rem"
        fontSize="2.4rem"
        link="/create-post"
        isAuthenticated={isAuthenticated}
      />
    );

  return (
    <SectionContainer>
      <ContentsContainer>
        <DisplayList>
          {listings?.map((item) => (
            <ProductCard key={item?._id} post={item} />
          ))}
        </DisplayList>
      </ContentsContainer>

      {isAuthenticated && (
        <CreateButton
          onClick={() => {
            router.replace('/create-post');
          }}
        />
      )}
    </SectionContainer>
  );
};

export default ListingsMasterSection;
