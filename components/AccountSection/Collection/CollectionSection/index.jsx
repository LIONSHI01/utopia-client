import React, { useState, useEffect } from 'react';

import { AiOutlinePlus } from '../../../ReactIcons';

import {
  SectionContainer,
  ContentsContainer,
  CollectionSection,
  CreateButtonWrapper,
} from './index.styles';

import {
  CollectionItem,
  CreateCollectionModal,
  CollectionDisplay,
  EmptyReminderBox,
} from '../../../index';

const CreateButton = ({ ...otherProps }) => (
  <CreateButtonWrapper {...otherProps}>
    <AiOutlinePlus size={25} color="var(--white)" />
    <span>Create collection</span>
  </CreateButtonWrapper>
);

const CollectionMasterSection = ({ user, refetchUser, isAuthenticated }) => {
  // CONFIGURATION

  // STATE MANAGEMENT
  const [itemCollections, setItemCollections] = useState([]);
  const [showCreateCollectionModal, setShowCreateCollectionModal] =
    useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    user?.itemCollections?.[0]
  );
  const [selectedCollectionId, setSelectedCollectionId] = useState(null);

  useEffect(() => {
    setItemCollections(user?.itemCollections);
    setSelectedCollection(
      user?.itemCollections?.filter(
        (col) => col.id === selectedCollectionId
      )?.[0] || user?.itemCollections?.[0]
    );
  }, [user, selectedCollectionId]);

  return (
    <SectionContainer>
      <ContentsContainer>
        <CollectionSection>
          {itemCollections?.length > 0 ? (
            <div className="display-zone">
              {itemCollections?.map((itemCollection) => (
                <CollectionItem
                  key={itemCollection?._id}
                  collection={itemCollection}
                  onClick={() => setSelectedCollectionId(itemCollection?._id)}
                />
              ))}
            </div>
          ) : (
            <EmptyReminderBox message="No Collection Yet." fontSize="2rem" />
          )}
        </CollectionSection>
        <CollectionDisplay
          refetchUser={refetchUser}
          collection={selectedCollection}
          isAuthenticated={isAuthenticated}
        />
      </ContentsContainer>
      {/* For creating Collction */}
      {isAuthenticated && (
        <>
          <CreateButton onClick={() => setShowCreateCollectionModal(true)} />
          <CreateCollectionModal
            user={user}
            refetchUser={refetchUser}
            showCreateCollectionModal={showCreateCollectionModal}
            setShowCreateCollectionModal={setShowCreateCollectionModal}
          />
        </>
      )}
    </SectionContainer>
  );
};

export default CollectionMasterSection;
