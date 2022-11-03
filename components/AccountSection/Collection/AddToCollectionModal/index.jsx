import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { AiOutlineGift } from 'react-icons/ai';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { ImEarth } from 'react-icons/im';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';

import {
  ModalContainer,
  CollectionsContainer,
  CollectionWrapper,
} from './index.styles';
import {
  Overlay,
  IconButton,
  ICON_BUTTON_TYPES,
  CreateCollectionModal,
} from '../../../index';
import { updateCollection } from '../../../../utils/collectionRequest';
import { newCollectionItems } from '../../../../utils/calculator';

const Collection = ({ collection, ...otherProps }) => (
  <CollectionWrapper {...otherProps}>
    <div className="placeHolder">
      <AiOutlineGift size={25} />
    </div>
    <div className="details">
      <span className="name">{collection?.name}</span>
      <div className="items">
        <ImEarth size={15} />
        <span>{collection?.items.length || 0} items</span>
      </div>
    </div>
  </CollectionWrapper>
);

const AddToCollectionModal = ({
  postId,
  collections,
  showAddToColModal,
  setShowAddToColModal,
  refetchUser,
}) => {
  // CONFIGURATION
  const router = useRouter();

  // STATE MANAGEMENT
  const [showCreateModal, setShowCreateModal] = useState(false);

  // HANDLER
  const updateCollectionHandler = async (collection, itemId) => {
    const items = newCollectionItems(collection.items, itemId);
    mutateUpdateCollection({ items, collectionId: collection._id });
  };

  // API CALL
  const { mutate: mutateUpdateCollection } = useMutation(updateCollection, {
    onSuccess: () => {
      toast.success('Collection updated.');
      setShowAddToColModal(false);
      if (typeof refetchUser !== 'undefined') {
        // safe to use the function
        refetchUser();
      }
    },
    onError: (err) => {
      toast.error(`Error:${err.message}`);
    },
  });

  return (
    <>
      <ModalContainer showUp={showAddToColModal}>
        <div className="close-btn">
          <IconButton
            size="x"
            buttonType={ICON_BUTTON_TYPES.hoverBackground}
            onClick={() => setShowAddToColModal(false)}
          >
            <IoMdClose size={30} />
          </IconButton>
        </div>
        <div className="heading">
          <h3>Add to collection</h3>
        </div>
        <CollectionsContainer>
          <button className="addCollection">
            <div className="placeHolder">
              <AiOutlinePlus size={30} color="var(--white)" />
            </div>
            <span className="name">Create new collection</span>
          </button>
          {collections?.map((collection) => (
            <Collection
              key={collection._id}
              collection={collection}
              onClick={() => updateCollectionHandler(collection, postId)}
            />
          ))}
        </CollectionsContainer>
      </ModalContainer>
      <CreateCollectionModal
        showCreateCollectionModal={showCreateModal}
        setShowCreateCollectionModal={setShowCreateModal}
      />
      <Overlay showUp={showAddToColModal} setShowUp={setShowAddToColModal} />
    </>
  );
};

export default AddToCollectionModal;
