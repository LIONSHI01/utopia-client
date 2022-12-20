import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { IoMdClose } from 'react-icons/io';
import { useSession } from 'next-auth/react';
import { useMutation } from 'react-query';

import { ModalContainer } from './index.styles';
import {
  Overlay,
  Button,
  BUTTON_TYPES,
  IconButton,
  ICON_BUTTON_TYPES,
  FormInputComp,
  MasterModalFramework,
} from '../../../index';
import { createCollection } from '../../../../utils/collectionRequest';

const CreateCollectionModal = ({
  refetchUser,
  showCreateCollectionModal,
  setShowCreateCollectionModal,
}) => {
  // CONFIGURATION
  const { data: user } = useSession();

  // STATE MANAGEMENT
  const [name, setName] = useState('');

  const onSubmitHandler = () => {
    mutateCreateCollection({
      data: name,
      userId: user?.profile?._id,
    });
  };

  const closeHandler = () => {
    setShowCreateCollectionModal(false);
    setName('');
  };

  const { mutate: mutateCreateCollection } = useMutation(createCollection, {
    onSuccess: () => {
      setName('');
      refetchUser();
      setShowCreateCollectionModal(false);
      toast.success('New collection created.');
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <MasterModalFramework
      showup={showCreateCollectionModal}
      setShowup={setShowCreateCollectionModal}
    >
      <ModalContainer>
        <div className="close-btn" onClick={closeHandler}>
          <IconButton size="x" buttonType={ICON_BUTTON_TYPES.hoverBackground}>
            <IoMdClose size={25} />
          </IconButton>
        </div>
        <div className="heading">
          <h3>Create new collection</h3>
        </div>

        <FormInputComp
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
    </MasterModalFramework>
  );
};

export default CreateCollectionModal;
