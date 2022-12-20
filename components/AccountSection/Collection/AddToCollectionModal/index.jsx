import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

import {
  AiOutlineGift,
  ImEarth,
  AiOutlinePlus,
  IoMdClose,
} from '../../../ReactIcons';

import {
  ModalContainer,
  CollectionsContainer,
  CollectionWrapper,
  UpdateLoaderContainer,
} from './index.styles';
import {
  IconButton,
  ICON_BUTTON_TYPES,
  CreateCollectionModal,
  Spinner,
  MasterModalFramework,
} from '../../../index';
import { updateCollection } from '../../../../utils/collectionRequest';
import { newCollectionItems } from '../../../../utils/profileCalculator';
import { useGetUserHook } from '../../../../utils/customHooks/fetchUserHook';

const Collection = ({ isLoading, collection, ...otherProps }) => {
  if (isLoading)
    return (
      <UpdateLoaderContainer>
        <Spinner size={15} />
      </UpdateLoaderContainer>
    );

  return (
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
};

const AddToCollectionModal = ({
  postId,
  showAddToColModal,
  setShowAddToColModal,
  refetchUser,
  refetchPost,
}) => {
  // CONFIGURATION
  const { data } = useSession();
  const { user } = useGetUserHook({ userId: data?.profile?.id });

  // STATE MANAGEMENT
  const [showCreateModal, setShowCreateModal] = useState(false);

  // HANDLER
  const updateCollectionHandler = async (collection, itemId) => {
    const items = newCollectionItems(collection.items, itemId);
    mutateUpdateCollection({ items, collectionId: collection._id });
  };

  // API CALL
  const { isLoading: isUpdating, mutate: mutateUpdateCollection } = useMutation(
    updateCollection,
    {
      onSuccess: () => {
        toast.success('Collection updated.');
        setShowAddToColModal(false);
        if (typeof refetchUser !== 'undefined') {
          // safe to use the function
          refetchUser();
        }
        if (typeof refetchPost !== 'undefined') {
          // safe to use the function
          refetchPost();
        }
      },
      onError: (err) => {
        toast.error(`Error:${err.message}`);
      },
    }
  );

  return (
    <MasterModalFramework
      showup={showAddToColModal}
      setShowup={setShowAddToColModal}
    >
      <ModalContainer>
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
          <button
            className="addCollection"
            onClick={() => {
              setShowAddToColModal(false);
              setShowCreateModal(true);
            }}
          >
            <div className="placeHolder">
              <AiOutlinePlus size={30} />
            </div>
            <span className="name">Create new collection</span>
          </button>
          {user?.itemCollections?.map((collection) => (
            <Collection
              isLoading={isUpdating}
              key={collection._id}
              collection={collection}
              onClick={() => updateCollectionHandler(collection, postId)}
            />
          ))}
        </CollectionsContainer>
      </ModalContainer>
      <CreateCollectionModal
        refetchUser={refetchUser}
        showCreateCollectionModal={showCreateModal}
        setShowCreateCollectionModal={setShowCreateModal}
      />
      {/* <Overlay showUp={showAddToColModal} setShowUp={setShowAddToColModal} /> */}
    </MasterModalFramework>
  );
};

export default AddToCollectionModal;
