import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMutation } from 'react-query';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import { AiTwotoneEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { CgSandClock } from 'react-icons/cg';
import { FaWallet } from 'react-icons/fa';
import { selectEthPrice } from '../../../../store/post/post.selector';
import EthIcon from '../../../../assets/image/eth-icon.png';
import { SectionContainer, EditTxHashBox } from './index.styles';
import {
  Button,
  BUTTON_TYPES,
  FormInputComp,
  AlertModal,
} from '../../../index';
import {
  deleteOrder,
  updateOrder,
  validateOrder,
  buyerConfirmOrder,
} from '../../../../utils/apiData/orderRequest';

const OrderDetails = ({ user, order, refetchUser }) => {
  // CONFIGURATION
  const ethPrice = useSelector(selectEthPrice);

  // STATES
  const [showEditTxHashInput, setShowEditTxHashInput] = useState(false);
  const [txHash, setTxHash] = useState(order?.transaction_hash?.[0]?.hash);
  const [address, setAddress] = useState(order?.from);

  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showBuyerConfirm, setShowBuyerConfirm] = useState(false);

  // HANDLERS
  const cancelChanges = async () => {
    setTxHash(order?.transaction_hash?.[0]?.hash);
    setAddress(order?.from);
  };

  // Modal Message
  const buyerConfirmTitle = 'Confirm Order';
  const buyerConfirmMsg =
    'Once you confirm the order, it will be marked as completed, and cannot undo the changes.';
  const buyerConfirmHandler = () => {
    mutateBuyerConfirm({ orderId: order?._id, userId: user?._id });
    setShowBuyerConfirm(false);
  };

  // API CALL
  const updateOrderHandler = async () => {
    // Validate txHash format
    if (txHash) {
      if (!txHash?.startsWith('0x'))
        return toast.error(
          'Transaction hash should start with "0x", please try again.'
        );

      if (+txHash?.length !== 66)
        return toast.error(
          'Transaction hash should be in length of 66 characters, please try again.'
        );
    }

    if (address) {
      if (!address?.startsWith('0x'))
        return toast.error('Invalid address, please try again.');
    }

    if (txHash == order?.transaction_hash?.[0]?.hash && address == order?.from)
      return toast.error('You have not made any changes.');

    mutateUpdateOrder({
      orderId: order?._id,
      address,
      txHash,
    });
  };

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

  // Validate order payment
  const { isLoading: isValidating, mutate } = useMutation(validateOrder, {
    onSuccess: (res) => {
      refetchUser();
      toast.success(`Validation ${res?.data?.validationResult}`);
    },
    onError: (err) => {
      console.log('from mutation err', err);
      toast.error(`${err?.response.data?.data?.message}`);
    },
  });

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

  // Update order TxHash and address
  const { isLoading: isUpdatingOrder, mutate: mutateUpdateOrder } = useMutation(
    updateOrder,
    {
      onSuccess: () => {
        toast.success('Update successfully!');
        refetchUser();
      },
      onError: (err) => {
        console.log('error from Mutation request', err);
        toast.error(err.response.data.data.message);
      },
    }
  );

  useEffect(() => {
    setTxHash(order?.transaction_hash?.[0]?.hash);
    setAddress(order?.from);
    setPaymentCompleted(order?.transaction_validated);
  }, [order]);

  return (
    <SectionContainer>
      <h3 className="heading">Order Details</h3>
      <div className="order-details">
        <div className="row">
          <span className="title">Order Id:</span>
          <div className="contents">
            <span>{order?._id}</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Order date:</span>
          <div className="contents">
            <span> {order?.createdAt?.split('T')[0]}</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Order status:</span>
          <div className="contents">
            <div
              className={
                order?.status === 'completed'
                  ? 'status completedStatus'
                  : 'status'
              }
            >
              {order?.status === 'completed' ? (
                <BsCheckCircleFill size={18} />
              ) : (
                <CgSandClock size={18} />
              )}
              <span>{order?.status}</span>
            </div>
          </div>
        </div>
        {paymentCompleted && (
          <div className="row">
            <span className="title">Buyer confirmation:</span>
            <div className="contents">
              {!order?.buyer_confirmation ? (
                <div className="buyer-confirmation">
                  <p>
                    Please confirm order status, if you have received
                    item/service.
                  </p>
                  <Button
                    size="m"
                    buttonType={BUTTON_TYPES.outlineRed}
                    onClick={() => setShowBuyerConfirm(true)}
                  >
                    {isConfirming ? 'Confirming' : 'Confirm'}
                  </Button>
                </div>
              ) : (
                <div className="confirmation-status">
                  <AiOutlineCheckCircle size={18} />
                  <span>Confirmed</span>
                </div>
              )}
            </div>
            <AlertModal
              title={buyerConfirmTitle}
              message={buyerConfirmMsg}
              onConfirmHandler={buyerConfirmHandler}
              showup={showBuyerConfirm}
              setShowup={setShowBuyerConfirm}
            />
          </div>
        )}
        <div className="row">
          <span className="title">Item name:</span>
          <div className="contents">
            <span> {order?.post?.title}</span>
            <Link
              href={`/products/${order?.post?.category}/${order?.post?.subCategory}/${order?.post?.slug}/${order?.post?._id}`}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="detailsLink"
              >
                (Details...)
              </a>
            </Link>
          </div>
        </div>
        <div className="row">
          <span className="title">Value:</span>
          <div className="contents">
            <div className="order-value">
              <div className="icon-container">
                <Image
                  src={EthIcon}
                  alt="eth"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="value-wrapper">
                <span>{order?.post?.price}</span>
                <span className="item-value">
                  $ {(ethPrice * order?.post?.price).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <span className="title">Transaction hash:</span>
          <div className="contents">
            {showEditTxHashInput ? (
              <EditTxHashBox>
                <FormInputComp
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

        <div className="row">
          <span className="title">Payment address:</span>
          <div className="contents">
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
        <div className="row">
          <span className="title">Transaction validation:</span>
          <div className="contents">
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
              <span>{paymentCompleted ? 'Validated' : 'Pending'}</span>
            </div>
            {!paymentCompleted && (
              <Button
                size="m"
                buttonType={BUTTON_TYPES.outlineRed}
                isLoading={isValidating}
                onClick={() => mutate(order?._id)}
              >
                {/* {isValidating ? 'Validating' : 'Validate'} */}
                Validate
              </Button>
            )}
          </div>
        </div>
      </div>
      {!order?.buyer_confirmation && (
        <div className="buttons-group">
          <div className="edit-buttons">
            <Button
              size="x"
              buttonType={BUTTON_TYPES.outlineGrey}
              onClick={cancelChanges}
            >
              Cancel
            </Button>
            <Button
              size="x"
              buttonType={BUTTON_TYPES.outlineRed}
              onClick={updateOrderHandler}
            >
              {isUpdatingOrder ? 'Updating' : 'Save Changes'}
            </Button>
          </div>
          <Button
            size="x"
            buttonType={BUTTON_TYPES.outlineGrey}
            onClick={() => mutateDeleteOrder(order?._id)}
          >
            {isDeleting ? 'Deleting' : 'Delete order'}
          </Button>
        </div>
      )}
    </SectionContainer>
  );
};

export default OrderDetails;
