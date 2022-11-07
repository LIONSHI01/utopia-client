import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';

import Link from 'next/link';
import { toast } from 'react-toastify';
import { AiOutlineCheckCircle, AiTwotoneEdit } from 'react-icons/ai';
import { FaWallet } from 'react-icons/fa';
import { BsXCircleFill, BsThreeDotsVertical } from 'react-icons/bs';
import ItemInfoBox from './ItemInfoBox';
import { useGetUserHook } from '../../../../utils/reactQueryHooks/fetchUserHook';

import {
  FormInputComp,
  Button,
  BUTTON_TYPES,
  UserIcon,
  AlertModal,
  IconButton,
  ICON_BUTTON_TYPES,
} from '../../../index';
import {
  updateOrder,
  validateOrder,
  deleteOrder,
  buyerConfirmOrder,
} from '../../../../utils/apiData/orderRequest';

import {
  DetailsBoxContainer,
  LeftContentBox,
  // ItemInfoBox,
  TransactionInfoBox,
  UserInfoBox,
  EditTxHashBox,
} from './index.styles';

const OrderDetailBox = ({ order, user, refetchUser }) => {
  // CONFIGURATION
  const { user: seller } = useGetUserHook({ userId: order?.seller });
  // STATE MANAGEMENT
  const [showEditTxHashInput, setShowEditTxHashInput] = useState(false);
  const [txHash, setTxHash] = useState(order?.transaction_hash?.[0]?.hash);
  const [address, setAddress] = useState(order?.from);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showBuyerConfirm, setShowBuyerConfirm] = useState(false);

  const { post, value, status, transaction_validated, transaction_hash } =
    order || {};
  const { category, title, coverImages, subCategory, description } = post || {};
  console.log(order);

  // Modal Message
  const buyerConfirmTitle = 'Confirm Order';
  const buyerConfirmMsg =
    'Once you confirm the order, it will be marked as completed, and cannot undo the changes.';
  const buyerConfirmHandler = () => {
    mutateBuyerConfirm({ orderId: order?._id, userId: user?._id });
    setShowBuyerConfirm(false);
  };

  // Validate order payment
  const { isLoading: isValidating, mutate: mutateValidateOrder } = useMutation(
    validateOrder,
    {
      onSuccess: (res) => {
        refetchUser();
        toast.success(`Validation ${res?.data?.validationResult}`);
      },
      onError: (err) => {
        console.log('from mutation err', err);
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

  // Delete Order
  const { isLoading: isDeleting, mutate: mutateDeleteOrder } = useMutation(
    deleteOrder,
    {
      onSuccess: () => {
        toast.success('Order deleted!');
        refetchUser();
      },
      onError: (err) => {
        console.log('from mutation err', err);
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

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

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => {
          setAddress(res[0]);
        });
    } else {
      alert('Please install Metamask extension.');
    }
  };

  useEffect(() => {
    setTxHash(order?.transaction_hash?.[0]?.hash);
    setAddress(order?.from);
    setPaymentCompleted(order?.transaction_validated);
  }, [order]);

  return (
    <DetailsBoxContainer>
      <LeftContentBox>
        <ItemInfoBox order={order} user={user} refetchUser={refetchUser} />
        {/* <ItemInfoBox>
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
                  Please confirm order status, if you have received
                  item/service.
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
        </ItemInfoBox> */}
        <TransactionInfoBox>
          <h4 className="heading">Transaction Details</h4>
          <div className="details_box">
            <div className="title_col">
              <span>Transaction Hash:</span>
            </div>
            <div className="content_col">
              {showEditTxHashInput ? (
                <EditTxHashBox>
                  <FormInputComp
                    placeHolder="0x41ecc8bfc41b2..."
                    type="text"
                    value={txHash}
                    onChange={(e) => setTxHash(e.target.value)}
                  />
                  <div className="edit-buttons">
                    <Button
                      size="m"
                      buttonType={BUTTON_TYPES.outlineGrey}
                      onClick={() => setShowEditTxHashInput(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="m"
                      buttonType={BUTTON_TYPES.outlineRed}
                      onClick={() => setShowEditTxHashInput(false)}
                    >
                      Confirm
                    </Button>
                  </div>
                </EditTxHashBox>
              ) : (
                <>
                  <div className="transactionHash">
                    {txHash ||
                      'Please provide your payment transaction hash for payment validation'}
                  </div>
                  {paymentCompleted ? (
                    <AiOutlineCheckCircle size={18} color="var(--green)" />
                  ) : (
                    <AiTwotoneEdit
                      size={15}
                      className="icon"
                      onClick={() => setShowEditTxHashInput(true)}
                    />
                  )}
                </>
              )}
            </div>
          </div>
          <div className="details_box">
            <div className="title_col">
              <span>Payment Address:</span>
            </div>
            <div className="content_col">
              <span>
                {address ||
                  'Please log in with MetaMask to register your payment address for this transaction.'}
              </span>
              {!paymentCompleted && (
                <FaWallet
                  size={15}
                  className="icon"
                  onClick={connectWalletHandler}
                />
              )}
            </div>
          </div>
          <div className="details_box">
            <div className="title_col">
              <span>Validation:</span>
            </div>
            <div className="content_col">
              <div
                className={
                  paymentCompleted ? 'validation completedStatus' : 'validation'
                }
              >
                {paymentCompleted ? (
                  <AiOutlineCheckCircle size={18} />
                ) : (
                  <BsXCircleFill size={18} />
                )}
                <span>{paymentCompleted ? 'Validated' : 'Invalidated'}</span>
              </div>
              {!paymentCompleted && (
                <Button
                  size="x"
                  buttonType={BUTTON_TYPES.outlineRed}
                  onClick={() =>
                    mutateValidateOrder({
                      orderId: order?._id,
                      transaction_hash: txHash,
                      from: address,
                    })
                  }
                >
                  {isValidating ? 'Validating' : 'Validate'}
                </Button>
              )}
            </div>
          </div>
        </TransactionInfoBox>
      </LeftContentBox>
      <UserInfoBox>
        <h4 className="heading">Seller Info</h4>
        <Link href={`/users/${seller?.id}/collections`}>
          <a className="userInfo_top">
            <UserIcon user={seller} />
            <div className="username">{seller?.name}</div>
          </a>
        </Link>
        <div className="shippingAddress">
          <h5 className="shippingAddress_heading">Shipping Address:</h5>
          <p>{seller?.shipping_address}</p>
        </div>
      </UserInfoBox>
    </DetailsBoxContainer>
  );
};

export default OrderDetailBox;
