import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';

import Image from 'next/image';

import {
  BsCheck2Circle,
  BiTimeFive,
  MdDelete,
  MdDoneAll,
  CgSandClock,
} from '../../../ReactIcons';
import { selectEthPrice } from '../../../../store/post/post.selector';

import {
  deleteOrder,
  buyerConfirmOrder,
} from '../../../../utils/apiData/orderRequest';

import {
  Button,
  BUTTON_TYPES,
  AlertModal,
  IconButton,
  ICON_BUTTON_TYPES,
  CommentSection,
} from '../../../index';

import { ItemInfoBoxContainer } from './index.styles';

const ItemInfoBox = ({
  order,
  user,
  buyer,
  refetchUser,
  orderSection,
  offerSection,
}) => {
  const { post, value } = order || {};
  const { category, title, coverImages, subCategory, description } = post || {};
  const ethPrice = useSelector(selectEthPrice);

  // STATE MANAGEMENT
  const [showBuyerConfirm, setShowBuyerConfirm] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  // Modal Message
  const buyerConfirmTitle = 'Confirm Order';
  const buyerConfirmMsg =
    'Once you confirm the order, it will be marked as completed, and cannot undo the changes.';
  const buyerConfirmHandler = () => {
    mutateBuyerConfirm({ orderId: order?._id, userId: user?._id });
    setShowBuyerConfirm(false);
  };

  // Delete Order Alert
  const deleteAlertTitle = 'Delete post';
  const deleteAlertMsg =
    'Order will be inactivated immediately. Please confirm below.';

  // Buyer Confirm Order
  const { isLoading: isConfirming, mutate: mutateBuyerConfirm } = useMutation(
    buyerConfirmOrder,
    {
      onSuccess: () => {
        refetchUser();
        toast.success('Order confirmed!');
      },
      onError: (err) => {
        console.log('from mutation err', err);
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

  // Delete Order
  const { mutate: mutateDeleteOrder } = useMutation(deleteOrder, {
    onSuccess: () => {
      refetchUser();
      toast.success('Order cancelled.');
    },
    onError: (err) => {
      console.log('from mutation err', err);
      toast.error(`${err?.response.data?.data?.message}`);
    },
  });

  // HANDLERS
  const deleteOrderHandler = () => {
    mutateDeleteOrder(order?.id);
    setShowDeleteAlert(false);
  };

  // FOR ORDER PAGE
  if (orderSection)
    return (
      <ItemInfoBoxContainer>
        <div className="heading">
          <div className="order_id">
            <h4>Order Details</h4>
            <span>#{order?.id}</span>
          </div>

          <div
            className={order?.active ? 'order_status active' : 'order_status'}
          >
            <span>{order?.active ? 'Active' : 'Inactive'}</span>
          </div>
          <div
            className={
              order?.status === 'completed'
                ? 'order_activity order_completed'
                : 'order_activity'
            }
          >
            {order?.status === 'completed' ? (
              <>
                <MdDoneAll size={20} />
                <span>{order?.status}</span>
              </>
            ) : (
              <>
                <CgSandClock size={20} />
                <span>{order?.status}</span>
              </>
            )}
          </div>
        </div>
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
            <p>{description?.slice(0, 100) + '...'}</p>
          </div>
          <div className="details_value">
            <div className="details_value">{value} ETH</div>
            <span className="details_value_usd">
              ${(value * ethPrice).toFixed(2)}
            </span>
          </div>
          {!order?.buyer_confirmation ? (
            <div className="buyer_confirmation">
              <Button
                disable={!order?.active ? true : false}
                size="x"
                buttonType={BUTTON_TYPES.outlineRed}
                onClick={() => setShowBuyerConfirm(true)}
              >
                {isConfirming ? 'Confirming' : 'Buyer confirm'}
              </Button>
              <p className="buyer_confirmation_reminder">
                Please confirm order status, if you have received item /
                service.
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
              <BsCheck2Circle size={18} />
              <span>Confirmed</span>
            </div>
          )}
        </div>
        {!order?.transaction_validated && order?.status !== 'cancelled' && (
          <div className="edit-btn">
            <IconButton
              size="x"
              buttonType={ICON_BUTTON_TYPES.hoverBackground}
              onClick={() => setShowDeleteAlert(true)}
            >
              <MdDelete size={20} color="var(--black-light-2)" />
            </IconButton>
            <AlertModal
              title={deleteAlertTitle}
              message={deleteAlertMsg}
              onConfirmHandler={deleteOrderHandler}
              showup={showDeleteAlert}
              setShowup={setShowDeleteAlert}
            />
          </div>
        )}
        {order?.buyer_confirmation && (
          <CommentSection user={user} order={order} refetchUser={refetchUser} />
        )}
      </ItemInfoBoxContainer>
    );

  // FOR OFFER PAGE
  if (offerSection)
    return (
      <ItemInfoBoxContainer>
        <div className="heading">
          <div className="order_id">
            <h4>Order </h4>
            <span>#{order?.id}</span>
          </div>
          <div
            className={order?.active ? 'order_status active' : 'order_status'}
          >
            <span>{order?.active ? 'Active' : 'Inactive'}</span>
          </div>
        </div>
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
            <p>{description?.slice(0, 100) + '...'}</p>
          </div>
          <div className="details_value">
            <span className="details_value_eth">{value} ETH</span>
            <span className="details_value_usd">
              ${(value * ethPrice).toFixed(2)}
            </span>
          </div>

          {!order?.buyer_confirmation ? (
            <div className="buyer_confirmation">
              <div className="buyer_confirmation_pending">
                <div>
                  <BiTimeFive size={18} />
                </div>
                <p>Pending for buyer confirmation</p>
              </div>
            </div>
          ) : (
            <div className="buyer_confirmation_confirmed">
              <BsCheck2Circle size={18} />
              <span>Confirmed</span>
            </div>
          )}
        </div>
        <CommentSection
          user={user}
          buyer={buyer}
          order={order}
          refetchUser={refetchUser}
          isEditable={false}
        />
      </ItemInfoBoxContainer>
    );
};

export default ItemInfoBox;
