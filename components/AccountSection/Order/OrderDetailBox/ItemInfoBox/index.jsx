import React, { useState } from 'react';
import { useMutation } from 'react-query';
import Image from 'next/image';
import { AiOutlineCheckCircle, AiTwotoneEdit } from 'react-icons/ai';
import { BsXCircleFill, BsThreeDotsVertical } from 'react-icons/bs';

import {
  deleteOrder,
  buyerConfirmOrder,
} from '../../../../../utils/apiData/orderRequest';
import {
  Button,
  BUTTON_TYPES,
  AlertModal,
  IconButton,
  ICON_BUTTON_TYPES,
} from '../../../../index';
import { ItemInfoBoxContainer } from './index.styles';

const EditDropDownMenu = () => {};

const ItemInfoBox = ({ order, user, refetchUser }) => {
  const { post, value } = order || {};

  const { category, title, coverImages, subCategory, description } = post || {};

  // STATE MANAGEMENT
  const [showBuyerConfirm, setShowBuyerConfirm] = useState(false);

  // Modal Message
  const buyerConfirmTitle = 'Confirm Order';
  const buyerConfirmMsg =
    'Once you confirm the order, it will be marked as completed, and cannot undo the changes.';
  const buyerConfirmHandler = () => {
    mutateBuyerConfirm({ orderId: order?._id, userId: user?._id });
    setShowBuyerConfirm(false);
  };

  // Buyer Confirm Order
  const { isLoading: isConfirming, mutate: mutateBuyerConfirm } = useMutation(
    buyerConfirmOrder,
    {
      onSuccess: () => {
        toast.success('Order confirmed!');
        refetchUser();
      },
      onError: (err) => {
        console.log('from mutation err', err);
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

  return (
    <ItemInfoBoxContainer>
      <h4 className="heading">Item information</h4>
      <div className="item_details_wrapper">
        <div className="image_container">
          <Image
            alt={title}
            src={coverImages}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
        <div className="details_description">
          <span className="item-title">{title}</span>
          <p>
            {category?.replace('-', ' & ')},&nbsp;
            {subCategory?.replace('-', ' & ')}
          </p>
          <p>{description?.slice(0, 50) + '...'}</p>
        </div>
        <div className="details_value">{value} ETH</div>
        {!order?.buyer_confirmation ? (
          <div className="buyer-confirmation">
            <Button
              size="m"
              buttonType={BUTTON_TYPES.outlineRed}
              onClick={() => setShowBuyerConfirm(true)}
            >
              {isConfirming ? 'Confirming' : 'Confirm'}
            </Button>
            <p>
              Please confirm order status, if you have received item/service.
            </p>
            <AlertModal
              title={buyerConfirmTitle}
              message={buyerConfirmMsg}
              onConfirmHandler={buyerConfirmHandler}
              showup={showBuyerConfirm}
              setShowup={setShowBuyerConfirm}
            />
          </div>
        ) : (
          <div className="confirmation-status">
            <AiOutlineCheckCircle size={18} />
            <span>Confirmed</span>
          </div>
        )}
      </div>
      <div className="edit-btn">
        <IconButton buttonType={ICON_BUTTON_TYPES.hoverBackground}>
          <BsThreeDotsVertical size={20} />
        </IconButton>
      </div>
    </ItemInfoBoxContainer>
  );
};

export default ItemInfoBox;
