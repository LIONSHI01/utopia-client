import React, { useState } from 'react';
import { MdModeEditOutline } from 'react-icons/md';
import { ImEarth } from 'react-icons/im';

import {
  DisplaySection,
  TitleContainer,
  ItemsListContainer,
} from './index.styles';
import {
  IconButton,
  ICON_BUTTON_TYPES,
  ProductCard,
  EditCollectionModal,
} from '../../../index';

const CollectionDisplay = ({ collection }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <DisplaySection>
      <TitleContainer>
        <div className="title">
          <h3>{collection?.name}</h3>
          <IconButton
            size="x"
            buttonType={ICON_BUTTON_TYPES.hoverBackground}
            onClick={() => setShowEditModal(true)}
          >
            <MdModeEditOutline size={20} />
          </IconButton>
        </div>
        <div className="items-count">
          <ImEarth size={15} color="var(--black-light-2)" />
          <span>{collection?.items.length || 0}&nbsp;Items</span>
        </div>
      </TitleContainer>
      <ItemsListContainer>
        {collection?.items?.map((item) => (
          <ProductCard key={item?._id} post={item} />
        ))}
      </ItemsListContainer>
      <EditCollectionModal
        collection={collection}
        showUp={showEditModal}
        setShowUp={setShowEditModal}
      />
    </DisplaySection>
  );
};

export default CollectionDisplay;
