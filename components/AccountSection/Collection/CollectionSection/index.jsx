import React, { useState, useEffect } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

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
} from '../../../index';

const CreateButton = ({ ...otherProps }) => (
  <CreateButtonWrapper {...otherProps}>
    <AiOutlinePlus size={25} color="var(--white)" />
    <span>Create collection</span>
  </CreateButtonWrapper>
);

const CollectionMasterSection = ({ user, refetchUser }) => {
  console.log('Collection Section:', user);
  // CONFIGURATION

  // STATE MANAGEMENT
  const [itemCollections, setItemCollections] = useState([]);
  const [showCreateCollectionModal, setShowCreateCollectionModal] =
    useState(false);
  const [selectedCollection, setSelectedCollection] = useState(
    user?.itemCollections?.[0]
  );

  useEffect(() => {
    setItemCollections(user?.itemCollections);
    setSelectedCollection(user?.itemCollections?.[0]);
  }, [user]);

  return (
    <SectionContainer>
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
        <CollectionDisplay
          refetchUser={refetchUser}
          collection={selectedCollection}
        />
      </ContentsContainer>
      {/* For creating Collction */}
      <CreateButton onClick={() => setShowCreateCollectionModal(true)} />
      <CreateCollectionModal
        user={user}
        refetchUser={refetchUser}
        showCreateCollectionModal={showCreateCollectionModal}
        setShowCreateCollectionModal={setShowCreateCollectionModal}
      />
    </SectionContainer>
  );
};

export default CollectionMasterSection;
