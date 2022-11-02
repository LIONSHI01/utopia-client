import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { AiOutlinePlus } from 'react-icons/ai';

import { getUser } from '../../../utils/accountRequest';

import {
  ProfilePageContainer,
  ContentsContainer,
  CollectionSection,
  CreateButtonWrapper,
} from '../../../pages_styles/profile-collections.styles';

import {
  CollectionItem,
  CreateCollectionModal,
  CollectionDisplay,
  MenuSidebar,
} from '../../../components';

const CreateButton = ({ ...otherProps }) => (
  <CreateButtonWrapper {...otherProps}>
    <AiOutlinePlus size={25} color="var(--white)" />
    <span>Create collection</span>
  </CreateButtonWrapper>
);

const ProfileCollectionsPage = () => {
  // CONFIGURATION
  const router = useRouter();
  const { data } = useSession();
  const user = data?.profile;

  // STATE MANAGEMENT
  const [itemCollections, setItemCollections] = useState([]);
  const [showCreateCollectionModal, setShowCreateCollectionModal] =
    useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    itemCollections[0]
  );

  const onSuccess = (data) => {
    setItemCollections(data.itemCollections);
    setSelectedCollection(data.itemCollections[0]);
  };

  const onError = (error) => {
    console.log('encounter an error during fetching ==> ', error);
  };

  const {
    isLoading,
    data: userData,
    isError,
    error,
  } = useQuery(['userCollections', user?._id], () => getUser(user?._id), {
    onSuccess,
    onError,
    enabled: !!user?._id,
  });

  return (
    <ProfilePageContainer>
      <MenuSidebar user={user} />
      <ContentsContainer>
        <CollectionSection>
          <h3 className="heading">Collections</h3>
          <div className="display-zone">
            {itemCollections?.map((itemCollection) => (
              <CollectionItem
                key={itemCollection?._id}
                collection={itemCollection}
                onClick={() => setSelectedCollection(itemCollection)}
              />
            ))}
          </div>
        </CollectionSection>
        <CollectionDisplay collection={selectedCollection} />
      </ContentsContainer>
      {/* For creating Collction */}
      <CreateButton onClick={() => setShowCreateCollectionModal(true)} />
      <CreateCollectionModal
        user={user}
        showCreateCollectionModal={showCreateCollectionModal}
        setShowCreateCollectionModal={setShowCreateCollectionModal}
      />
    </ProfilePageContainer>
  );
};

export default ProfileCollectionsPage;
