import React, { useState } from 'react';

import { MdModeEditOutline, ImEarth } from '../../../ReactIcons';

import {
  DisplaySection,
  TitleContainer,
  ItemsListContainer,
} from './index.styles';

import {
  IconButton,
  ICON_BUTTON_TYPES,
  EditCollectionModal,
  CollectionProductCard,
  EmptyReminderBox,
} from '../../../index';

const CollectionDisplay = ({ collection, refetchUser, isAuthenticated }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <DisplaySection>
      <TitleContainer>
        <div className="title">
          <h3>{collection?.name}</h3>
          {isAuthenticated && collection && (
            <IconButton
              size="x"
              buttonType={ICON_BUTTON_TYPES.hoverBackground}
              onClick={() => setShowEditModal(true)}
            >
              <MdModeEditOutline size={20} />
            </IconButton>
          )}
        </div>
        {collection && (
          <div className="items-count">
            <ImEarth size={15} />
            <span>{collection?.items?.length || 0}&nbsp;Items</span>
          </div>
        )}
      </TitleContainer>

      {collection?.items?.length > 0 ? (
        <ItemsListContainer>
          {collection?.items?.map((item) => (
            <CollectionProductCard
              key={item?._id}
              post={item}
              collection={collection}
              refetchUser={refetchUser}
            />
          ))}
        </ItemsListContainer>
      ) : (
        <EmptyReminderBox
          message="No item yet."
          fontSize="2rem"
          buttonText="Let's Explore"
          buttonHeight="4rem"
          buttonWidth="12rem"
          link="/"
          isAuthenticated={isAuthenticated}
        />
      )}
      {collection && (
        <EditCollectionModal
          collection={collection}
          refetchUser={refetchUser}
          showUp={showEditModal}
          setShowUp={setShowEditModal}
        />
      )}
    </DisplaySection>
  );
};

export default CollectionDisplay;
