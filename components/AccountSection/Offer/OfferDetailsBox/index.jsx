import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { BsCheck2Circle, AiOutlineLink, BiTimeFive } from '../../../ReactIcons';
import { useGetUserHook } from '../../../../utils/reactQueryHooks/fetchUserHook';
import { sellerClaimFund } from '../../../../utils/apiData/orderRequest';

import {
  Button,
  BUTTON_TYPES,
  ItemInfoBox,
  UserInfoBox,
  AlertModal,
  WaitingModal,
} from '../../../index';

import {
  DetailsBoxContainer,
  LeftContentBox,
  TransactionInfoBox,
} from './index.styles';

const OfferDetailsBox = ({ order, user, refetchUser }) => {
  // CONFIGURATION

  // const order = useSelector(selectSelectedOrder);
  const { user: buyer } = useGetUserHook({ userId: order?.postedBy });
  const sellerClaimHashUrl = `https://goerli.etherscan.io/tx/${order?.seller_claim_txHash}`;

  // STATE MANAGEMENT
  const [showSellerClaimModal, setShowSellerClaimModal] = useState(false);
  const [showClaimWaitModal, setShowClaimWaitModal] = useState(false);
  const [sellerClaimHash, setSellerClaimHash] = useState(
    order?.seller_claim_txHash
  );

  // Modal Message: Seller Claim
  const sellerClaimTitle = 'Claim your fund';
  const sellerClaimMsg =
    "Congrets for completing the order, the claiming process may take a few minutes, please don't close this window after confirming the order.";

  const sellerClaimHandler = () => {
    mutateSellerClaim({ orderId: order?._id, userId: user?._id });
    setShowClaimWaitModal(true);
    setShowSellerClaimModal(false);
  };

  const waitModalTitle = 'Claiming Completed!';
  const waitModalMsg = 'You may view the claiming transaction on chain.';
  const waitingModalLink = `https://goerli.etherscan.io/tx/${sellerClaimHash}`;

  // API CALLS
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

  useEffect(() => {
    setSellerClaimHash(order?.seller_claim_txHash);
  }, [order]);

  return (
    <DetailsBoxContainer>
      <LeftContentBox>
        <ItemInfoBox
          order={order}
          user={user}
          buyer={buyer}
          refetchUser={refetchUser}
          offerSection={true}
        />

        <TransactionInfoBox>
          <h4 className="heading">Transaction Details</h4>
          <div className="details_box">
            <div className="title_col">
              <span>Transaction Hash:</span>
            </div>
            <div className="content_col">
              {order?.transaction_hash?.[0]?.hash || 'Pending for buyer entry.'}
            </div>
          </div>
          <div className="details_box">
            <div className="title_col">
              <span>Payment Address:</span>
            </div>
            <div className="content_col">
              <span>{order?.from || 'Pending for buyer entry.'}</span>
            </div>
          </div>
          <div className="details_box">
            <div className="title_col">
              <span>Validation:</span>
            </div>
            <div className="content_col">
              <div
                className={
                  order?.transaction_validated
                    ? 'validation completedStatus'
                    : 'validation'
                }
              >
                {order?.transaction_validated ? (
                  <>
                    <BsCheck2Circle size={18} />
                    <span>Validated</span>
                  </>
                ) : (
                  <>
                    <BiTimeFive size={18} />
                    <span>Pending</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="details_box">
            <span className="title_col">Seller Claim History:</span>
            <div className="content_col">
              <div className="seller_claim_record">
                {order?.seller_claimed ? (
                  <>
                    <AiOutlineLink size={20} />
                    <a
                      href={sellerClaimHashUrl}
                      target="_blank"
                      rel="noreferrer"
                    >{`${sellerClaimHashUrl.slice(0, 65)}...`}</a>
                  </>
                ) : (
                  <span>No record yet</span>
                )}
              </div>
            </div>
          </div>
          {order?.seller_claimed_at && (
            <div className="details_box">
              <span className="title_col">Seller Claim At:</span>
              <div className="content_col">
                <div className="seller_claim_date">
                  <BiTimeFive size={18} />
                  <span>
                    {new Date(
                      Date.parse(order?.seller_claimed_at)
                    )?.toLocaleDateString('en-us', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            </div>
          )}
          {!order?.seller_claimed && (
            <div className="seller_claim_btn">
              <Button
                disable={
                  order?.transaction_validated && order?.buyer_confirmation
                    ? false
                    : true
                }
                size="x"
                buttonType={BUTTON_TYPES.outlineRed}
                onClick={() => setShowSellerClaimModal(true)}
              >
                Claim fund
              </Button>
              {(!order?.transaction_validated ||
                !order?.buyer_confirmation) && (
                <p>Please wait until buyer confirmation completed.</p>
              )}
            </div>
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
        </TransactionInfoBox>
      </LeftContentBox>
      <UserInfoBox buyer={buyer} />
    </DetailsBoxContainer>
  );
};

export default OfferDetailsBox;
