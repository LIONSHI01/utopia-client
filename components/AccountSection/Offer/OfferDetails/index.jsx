import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { useMutation } from 'react-query';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { CgSandClock } from 'react-icons/cg';
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs';

import EthIcon from '../../../../assets/image/eth-icon.png';
import { SectionContainer } from './index.styles';
import { Button, BUTTON_TYPES, AlertModal } from '../../../index';
import {
  validateOrder,
  sellerConfirmOrder,
} from '../../../../utils/apiData/orderRequest';

const OfferDetails = ({ user, order, refetchUser }) => {
  // CONFIGURATION
  console.log(order);
  // STATES

  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showSellerConfirm, setShowSellerConfirm] = useState(false);

  // HANDLERS
  const cancelChanges = async () => {
    setTxHash(order?.transaction_hash[0]?.hash);
    setAddress(order?.from);
  };

  // Modal Message
  const sellerConfirmTitle = 'Confirm Order';
  const sellerConfirmMsg =
    'Once you confirm the order, it will be marked as completed, and cannot undo the changes.';
  const sellerConfirmHandler = () => {
    mutateSellerConfirm({ orderId: order?._id, userId: user?._id });
    setShowSellerConfirm(false);
  };

  // API CALL

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

  // Buyer Confirm Order
  const { isLoading: isConfirming, mutate: mutateSellerConfirm } = useMutation(
    sellerConfirmOrder,
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

  useEffect(() => {
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
            <div className="status">
              {order?.status === 'completed' ? (
                <BsCheckCircleFill size={18} color="var(--green)" />
              ) : (
                <CgSandClock size={20} />
              )}
              <span>{order?.status}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <span className="title">Buyer confirmation:</span>
          <div className="contents">
            {!order?.buyer_confirmation ? (
              <div className="buyer-confirmation">
                <p>Waiting for buyer confirm</p>
              </div>
            ) : (
              <div className="confirmation-status">
                <AiOutlineCheckCircle size={18} />
                <span>Confirmed</span>
              </div>
            )}
          </div>
          <AlertModal
            title={sellerConfirmTitle}
            message={sellerConfirmMsg}
            onConfirmHandler={sellerConfirmHandler}
            showup={showSellerConfirm}
            setShowup={setShowSellerConfirm}
          />
        </div>
        {paymentCompleted && (
          <div className="row">
            <span className="title">Seller confirmation:</span>
            <div className="contents">
              {!order?.seller_confirmation ? (
                <div className="buyer-confirmation">
                  <p>
                    Please confirm order status, if you have received
                    item/service.
                  </p>
                  <Button
                    size="m"
                    buttonType={BUTTON_TYPES.outlineRed}
                    onClick={() => setShowSellerConfirm(true)}
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
              title={sellerConfirmTitle}
              message={sellerConfirmMsg}
              onConfirmHandler={sellerConfirmHandler}
              showup={showSellerConfirm}
              setShowup={setShowSellerConfirm}
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
              <span>{order?.post?.price}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <span className="title">Transaction hash:</span>
          <div className="contents">
            <div className="transactionHash">
              {order?.transaction_hash?.[0]?.hash || 'Waiting for buyer entry.'}
            </div>
            {paymentCompleted && (
              <AiOutlineCheckCircle size={18} color="var(--green)" />
            )}
          </div>
        </div>

        <div className="row">
          <span className="title">Payment address:</span>
          <div className="contents">
            <span>{order?.from || 'Waiting for buyer entry.'}</span>
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
              <span>{paymentCompleted ? 'Validated' : 'Invalidated'}</span>
            </div>
          </div>
        </div>
      </div>
      <Button size="x" buttonType={BUTTON_TYPES.outlineRed}>
        Claim fund
      </Button>
    </SectionContainer>
  );
};

export default OfferDetails;
