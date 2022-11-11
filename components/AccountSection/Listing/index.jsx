import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AiOutlinePlus } from 'react-icons/ai';

import {
  SectionContainer,
  ContentsContainer,
  CreateButtonWrapper,
  DisplayList,
} from './index.styles';

import { ProductCard } from '../../index';

const CreateButton = ({ ...otherProps }) => (
  <CreateButtonWrapper {...otherProps}>
    <AiOutlinePlus size={25} color="var(--white)" />
    <span>List item</span>
  </CreateButtonWrapper>
);

const ListingsMasterSection = ({ user, isAuthenticated }) => {
  // CONFIGURATION
  const router = useRouter();
  console.log(user);
  // STATE MANAGEMENT
  const [listings, setListings] = useState(null);

  useEffect(() => {
    // Filter only ACTIVE posts
    setListings(user?.posts?.filter((post) => post?.active === true));
  }, [user]);

  return (
    <SectionContainer>
      <ContentsContainer>
        <h3 className="heading">Listings</h3>
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
