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
import { Button, BUTTON_TYPES, AlertModal, WaitingModal } from '../../../index';
import {
  sellerConfirmOrder,
  sellerClaimFund,
} from '../../../../utils/apiData/orderRequest';

const OfferDetails = ({ user, order, refetchUser }) => {
  // CONFIGURATION
  const sellerClaimHashUrl = `https://goerli.etherscan.io/tx/${order?.seller_claim_txHash}`;
  // STATES
  console.log(order);

  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [showSellerConfirm, setShowSellerConfirm] = useState(false);
  const [showSellerClaimModal, setShowSellerClaimModal] = useState(false);
  const [showClaimWaitModal, setShowClaimWaitModal] = useState(false);
  const [sellerClaimHash, setSellerClaimHash] = useState(
    order?.seller_claim_txHash
  );

  // HANDLERS

  // Modal Message: Seller Confirmation
  const sellerConfirmTitle = 'Confirm Order';
  const sellerConfirmMsg =
    'Once you confirm the order, it will be marked as completed, and cannot undo the changes.';
  const sellerConfirmHandler = () => {
    mutateSellerConfirm({ orderId: order?._id, userId: user?._id });
    setShowSellerConfirm(false);
  };

  // // Modal Message: Seller Claim
  const sellerClaimTitle = 'Claim your fund';
  const sellerClaimMsg =
    "Congrets for completing the order, the claiming process may take a few minutes, please don't close this window after confirming the order, thank you.";

  const sellerClaimHandler = () => {
    mutateSellerClaim({ orderId: order?._id, userId: user?._id });
    setShowClaimWaitModal(true);
    setShowSellerClaimModal(false);
  };

  const waitModalTitle = 'Claiming Completed!';
  const waitModalMsg = 'You may view the claiming transaction on chain.';
  const waitingModalLink = `https://goerli.etherscan.io/tx/${sellerClaimHash}`;

  // API CALL

  // Seller Confirm Order
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
    setSellerClaimHash(order?.seller_claim_txHash);
  }, [order]);

  // Seller Claim Fund
  const { isLoading: isClaiming, mutate: mutateSellerClaim } = useMutation(
    sellerClaimFund,
    {
      onSuccess: () => {
        toast.success(
          'You have claimed your fund, you may check it on block explorer.'
        );
        refetchUser();
      },
      onError: (err) => {
        console.log('from mutation err', err);
        toast.error(`${err?.response.data?.data?.message}`);
      },
    }
  );

  // Handler

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
        <div className="row">
          <span className="title">Seller Claim History:</span>
          <div className="contents">
            <div className="seller-claim">
              {order?.seller_claimed ? (
                <a
                  href={sellerClaimHashUrl}
                  target="_blank"
                  rel="noreferrer"
                >{`${sellerClaimHashUrl.slice(0, 40)}...`}</a>
              ) : (
                <span>No record yet</span>
              )}
            </div>
          </div>
        </div>
      </div>
      {!order?.seller_claimed && (
        <Button
          size="x"
          buttonType={BUTTON_TYPES.outlineRed}
          onClick={() => setShowSellerClaimModal(true)}
        >
          Claim fund
        </Button>
      )}
      <AlertModal
        title={sellerClaimTitle}
        message={sellerClaimMsg}
        onConfirmHandler={sellerClaimHandler}
        showup={showSellerClaimModal}
        setShowup={setShowSellerClaimModal}
      />
      <WaitingModal
        title={waitModalTitle}
        message={waitModalMsg}
        url={waitingModalLink}
        isLoading={isClaiming}
        showup={showClaimWaitModal}
        setShowup={setShowClaimWaitModal}
      />
    </SectionContainer>
  );
};

export default OfferDetails;
