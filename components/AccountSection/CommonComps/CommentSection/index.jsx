import React, { useState, useEffect, useRef } from 'react';

import { BsThreeDots } from '../../../ReactIcons';

import {
  UserIcon,
  RatingItem,
  IconButton,
  ICON_BUTTON_TYPES,
  OrderCommentBox,
  AlertModal,
} from '../../../index';
import { CommentSectionContainer, MenuWrapper } from './index.styles';
import { useDeleteReview } from '../../../../utils/reactQueryHooks/reviewHooks';
import { timePeriod } from '../../../../utils/timeCalculator';

const DropdownMenu = ({ setShowup, setShowEdit, setShowDelete }) => {
  const onClickEditHandler = () => {
    setShowEdit(true);
    setShowup(false);
  };

  return (
    <MenuWrapper>
      <ul>
        <li onClick={onClickEditHandler}>Edit</li>
        <li onClick={() => setShowDelete(true)}>Delete</li>
      </ul>
    </MenuWrapper>
  );
};

// isEditable = true -> for Order section,
// isEditable = false -> for Offer section,
const CommentSection = ({
  user,
  buyer,
  order,
  refetchUser,
  isEditable = true,
}) => {
  // CONFIGURATION
  const ref = useRef();
  const { mutate: mutateDeleteReview } = useDeleteReview({ refetchUser });
  const updatePeriod = timePeriod(order?.buyer_review?.[0]?.updatedAt);

  // STATE MANAGEMENT
  const [showEditComment, setShowEditComment] = useState(false);
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // DELETE MODAL SETTING
  const deleteModalTitle = 'Delete Your Review';
  const deleteModalMsg =
    'Your review will be deleted permanently, please confirm again.';

  const onConfirmDeleteHandler = () => {
    setShowDeleteModal(false);
    mutateDeleteReview({
      userId: user?.id,
      reviewId: order?.buyer_review?.[0]?.id,
    });
  };

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (showDropdownMenu && !ref.current.contains(e.target)) {
        setShowDropdownMenu(false);
      }
    };
    window.addEventListener('mousedown', checkIfClickOutside, true);

    return () => {
      window.removeEventListener('mousedown', checkIfClickOutside, true);
    };
  }, [showDropdownMenu]);

  if (isEditable === false) {
    return (
      <CommentSectionContainer>
        {order?.buyer_review?.length > 0 && (
          <div className="comment_wrapper">
            <p className="comment_wrapper_heading">Buyer Comment:</p>
            <div className="comment_user">
              <UserIcon size="s" user={buyer} />
              <span className="username">{buyer?.name}</span>
            </div>
            <div className="comment_details">
              <div className="upper_row">
                <RatingItem rating={order?.buyer_review?.[0]?.reviewRating} />
                <span>{updatePeriod}</span>
              </div>
              <p className="order_comment_content">
                {order?.buyer_review?.[0]?.content}
              </p>
            </div>
          </div>
        )}
      </CommentSectionContainer>
    );
  }
  return (
    <CommentSectionContainer>
      {order?.buyer_review?.length > 0 && !showEditComment ? (
        <div className="comment_wrapper">
          <div className="comment_user">
            <UserIcon size="s" user={user} />
            <span className="username">{user?.name}</span>
          </div>
          <div className="comment_details">
            <div className="upper_row">
              <RatingItem rating={order?.buyer_review?.[0]?.reviewRating} />
              <span>{updatePeriod}</span>
            </div>
            <p className="order_comment_content">
              {order?.buyer_review?.[0]?.content}
            </p>

            <div className="edit_button" ref={ref}>
              <IconButton
                buttonType={ICON_BUTTON_TYPES.hoverBackground}
                onClick={() => setShowDropdownMenu((prev) => !prev)}
              >
                <BsThreeDots size={15} />
              </IconButton>
              {showDropdownMenu && (
                <DropdownMenu
                  setShowup={setShowDropdownMenu}
                  setShowEdit={setShowEditComment}
                  setShowDelete={setShowDeleteModal}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <OrderCommentBox
          user={user}
          refetchUser={refetchUser}
          order={order}
          setShowup={setShowEditComment}
          isUpdate={showEditComment} //EditComment = updating comment,differentiate create / update review
        />
      )}
      <AlertModal
        title={deleteModalTitle}
        message={deleteModalMsg}
        showup={showDeleteModal}
        setShowup={setShowDeleteModal}
        onConfirmHandler={onConfirmDeleteHandler}
      />
    </CommentSectionContainer>
  );
};

export default CommentSection;
