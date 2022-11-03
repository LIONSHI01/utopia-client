import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

import { ModalContainer } from './index.styles';
import {
  Overlay,
  Button,
  BUTTON_TYPES,
  IconButton,
  ICON_BUTTON_TYPES,
  FormInputComp,
} from '../../../index';
import { createCollection } from '../../../../utils/collectionRequest';

const CreateCollectionModal = ({
  user,
  refetchUser,
  showCreateCollectionModal,
  setShowCreateCollectionModal,
}) => {
  // CONFIGURATION

  // STATE MANAGEMENT
  const [name, setName] = useState('');

  const onSubmitHandler = async () => {
    const res = await createCollection(name, user?._id);

    if (res.status === 201) {
      setName('');
      refetchUser();
      setShowCreateCollectionModal(false);
    }
  };

  const closeHandler = () => {
    setShowCreateCollectionModal(false);
    setName('');
  };

  return (
    <>
      <ModalContainer showUp={showCreateCollectionModal}>
        <div className="close-btn" onClick={closeHandler}>
          <IconButton size="x" buttonType={ICON_BUTTON_TYPES.hoverBackground}>
            <IoMdClose size={25} />
          </IconButton>
        </div>
        <div className="heading">
          <h3>Create new collection</h3>
        </div>

        <FormInputComp
          fieldName="collectionName"
          label="Collection name"
          placeholder="Artwork,Chrismas Gift List, etc."
          maxLength="50"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <div className="buttons-group">
          <Button buttonType={BUTTON_TYPES.outlineGrey} onClick={closeHandler}>
            Cancle
          </Button>
          <Button onClick={onSubmitHandler}>Create collection</Button>
        </div>
      </ModalContainer>
      <Overlay
        showUp={showCreateCollectionModal}
        setShowUp={setShowCreateCollectionModal}
      />
    </>
  );
};

export default CreateCollectionModal;
