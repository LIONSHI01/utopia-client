import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { AiTwotoneEdit, AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';
import { FaWallet } from 'react-icons/fa';

import { SectionContainer, EditTxHashBox } from './index.styles';
import { Button, BUTTON_TYPES, FormInputComp } from '../../../index';
import {
  deleteOrder,
  updateOrder,
  validateOrder,
} from '../../../../utils/apiData/orderRequest';

const OrderDetails = ({ order, refetchOrders }) => {
  // CONFIGURATION
  const router = useRouter();

  // STATES
  const [showEditTxHashInput, setShowEditTxHashInput] = useState(false);
  const [txHash, setTxHash] = useState(order?.transactionHash);
  const [address, setAddress] = useState(order?.from);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  // HANDLERS
  const cancelChanges = async () => {
    setTxHash(order?.transactionHash);
    setAddress(order?.from);
  };

  // API CALL
  const updateOrderHandler = async () => {
    console.log('update:', address, txHash);
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

    if (txHash == order?.transactionHash && address == order?.from)
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
      refetchOrders();
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
        refetchOrders();
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
        refetchOrders();
      },
      onError: (err) => {
        console.log('error from Mutation request', err);
        toast.error(err.response.data.data.message);
      },
    }
  );

  useEffect(() => {
    setTxHash(order?.transactionHash);
    setAddress(order?.from);
    setIsOrderCompleted(order?.transactionValidation === 'completed');
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
                order?.status === 'payment validated'
                  ? 'status completedStatus'
                  : 'status'
              }
            >
              {order?.status === 'completed' ? (
                <BsCheckCircleFill size={18} />
              ) : (
                <BsXCircleFill size={18} />
              )}
              <span>{order?.status}</span>
            </div>
          </div>
        </div>
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
            <span>${order?.post?.price}</span>
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
                {isOrderCompleted ? (
                  <AiOutlineCheckCircle size={18} color="green" />
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
          <span className="title">Transaction validation:</span>
          <div className="contents">
            <div
              className={
                isOrderCompleted ? 'validation completedStatus' : 'validation '
              }
            >
              {isOrderCompleted ? (
                <BsCheckCircleFill size={18} />
              ) : (
                <BsXCircleFill size={18} />
              )}
              <span>{order?.transactionValidation}</span>
            </div>
            {!isOrderCompleted && (
              <Button
                size="m"
                buttonType={BUTTON_TYPES.outlineRed}
                onClick={() => mutate(order?._id)}
              >
                {isValidating ? 'Validating' : 'Validate'}
              </Button>
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

            {!isOrderCompleted && (
              <FaWallet
                size={15}
                className="icon"
                onClick={connectWalletHandler}
              />
            )}
          </div>
        </div>
      </div>
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
    </SectionContainer>
  );
};

export default OrderDetails;
