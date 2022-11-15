import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { inactivePost } from '../../../utils/postRequest';

import { AlertModal } from '../../index';
import { MenuWrapper, ContentWrapper } from './index.styles';

const EditDropdownMenu = ({ showup, setShowup, post }) => {
  const router = useRouter();
  const toEditPageHandler = () => {
    router.push(`/edit-post/${post?._id}`);
  };

  // STATE MANAGEMENT
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const deleteAlertTitle = 'Delete post';
  const deleteAlertMsg =
    'Post will be deleted immediately. Please confirm below.';

  const onDeleteHandler = () => {
    mutateDeletePost({ postId: post?._id });
    setShowDeleteAlert(false);
  };

  const { mutate: mutateDeletePost } = useMutation(inactivePost, {
    onSuccess: () => {
      router.push('/');
      toast.success('Item is deleted successfully.');
    },
    onError: (err) => {
      console.log(err);
      toast.error(
        'Something went wrong during deleting the item, please try again later.'
      );
    },
  });

  return (
    <>
      <MenuWrapper showup={showup}>
        <ContentWrapper showup={showup}>
          <ul>
            <li className="list-item" onClick={toEditPageHandler}>
              Edit
            </li>
            <li
              className="list-item"
              onClick={() => {
                setShowup(false);
                setShowDeleteAlert(true);
              }}
            >
              Delete
            </li>
          </ul>
        </ContentWrapper>
      </MenuWrapper>
      <AlertModal
        title={deleteAlertTitle}
        message={deleteAlertMsg}
        showup={showDeleteAlert}
        setShowup={setShowDeleteAlert}
        onConfirmHandler={onDeleteHandler}
      />
    </>
  );
};

export default EditDropdownMenu;
