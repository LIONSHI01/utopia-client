import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { AiOutlinePlus } from 'react-icons/ai';

import { getUser } from '../../../utils/accountRequest';

import {
  ProfilePageContainer,
  ContentsContainer,
  CreateButtonWrapper,
  DisplayList,
} from '../../../pages_styles/profile-listings.styles';

import { MenuSidebar, ProductCard } from '../../../components';

const CreateButton = ({ ...otherProps }) => (
  <CreateButtonWrapper {...otherProps}>
    <AiOutlinePlus size={25} color="var(--white)" />
    <span>List item</span>
  </CreateButtonWrapper>
);

const ProfileListingsPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { data } = useSession();
  const user = data?.profile;

  // STATE MANAGEMENT
  const [listings, setListings] = useState(null);

  const {
    isLoading,
    data: userData,
    isError,
    error,
  } = useQuery(['userProfile', user?._id], () => getUser(user?._id), {
    onSuccess: (data) => {
      console.log(data?.posts);
      setListings(data?.posts);
    },
    enabled: !!user?._id,
  });

  return (
    <ProfilePageContainer>
      <MenuSidebar user={user} />
      <ContentsContainer>
        <h3 className="heading">My Listings</h3>
        <DisplayList>
          {listings?.map((item) => (
            <ProductCard key={item?._id} post={item} />
          ))}
        </DisplayList>
      </ContentsContainer>
      {/* For creating Collction */}
      <CreateButton onClick={() => {}} />
    </ProfilePageContainer>
  );
};

export default ProfileListingsPage;
