import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { IoMdClose, IoMdTrash } from 'react-icons/io';

import {
  updateCollection,
  deleteCollection,
} from '../../../../utils/collectionRequest';

import { ModalContainer } from './index.styles';
import {
  Overlay,
  Button,
  BUTTON_TYPES,
  IconButton,
  ICON_BUTTON_TYPES,
  FormInputComp,
} from '../../../index';

const EditCollectionModal = ({
  collection,
  showUp,
  setShowUp,
  refetchUser,
}) => {
  const router = useRouter();
  const [name, setName] = useState(collection?.name);

  useEffect(() => {
    setName(collection?.name);
  }, [collection]);

  const closeModalHandler = () => {
    setName(collection?.name);
    setShowUp(false);
  };

  const onSubmitHandler = async () => {
    const res = await updateCollection({ name, collectionId: collection?._id });
    if (res.status === 200) {
      refetchUser();
      setName('');
      setShowUp(false);
    }
  };

  const deleteHandler = async () => {
    const res = await deleteCollection(collection?._id);
    if (res.status === 200) {
      refetchUser();
      setName('');
      setShowUp(false);
    }
  };

  return (
    <>
      <ModalContainer showUp={showUp}>
        <div className="close-btn" onClick={closeModalHandler}>
          <IconButton size="x" buttonType={ICON_BUTTON_TYPES.hoverBackground}>
            <IoMdClose size={25} />
          </IconButton>
        </div>
        <div className="heading">
          <h3>Edit Your Collection</h3>
        </div>

        <FormInputComp
          fieldName="collectionName"
          label="Collection name"
          placeholder="Artwork,Chrismas Gift List, etc."
          maxLength="50"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="buttons-group">
          <button size="x" className="delete-btn" onClick={deleteHandler}>
            <IoMdTrash size={20} />
            Delete collection
          </button>

          <Button
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={closeModalHandler}
          >
            Cancel
          </Button>
          <Button onClick={onSubmitHandler}>Save</Button>
        </div>
      </ModalContainer>
      ;
      <Overlay showUp={showUp} setShowUp={setShowUp} />
    </>
  );
};

export default EditCollectionModal;
