import React, { useState, useEffect } from 'react';
import { useMutation } from 'react-query';

import { toast } from 'react-toastify';

import {
  FaWallet,
  BsCheck2Circle,
  AiTwotoneEdit,
  BiTimeFive,
} from '../../../ReactIcons';

import { useGetUserHook } from '../../../../utils/reactQueryHooks/fetchUserHook';

import {
  FormInputComp,
  Button,
  BUTTON_TYPES,
  ItemInfoBox,
  UserInfoBox,
  IconButton,
  ICON_BUTTON_TYPES,
} from '../../../index';
import { validateOrder } from '../../../../utils/apiData/orderRequest';

import {
  DetailsBoxContainer,
  LeftContentBox,
  TransactionInfoBox,
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

  // Modal Message

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
  }, [order, user]);

  return (
    <DetailsBoxContainer>
      <LeftContentBox>
        <ItemInfoBox
          order={order}
          user={user}
          refetchUser={refetchUser}
          orderSection={true}
        />

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
                      size="x"
                      buttonType={BUTTON_TYPES.outlineGrey}
                      onClick={() => setShowEditTxHashInput(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="x"
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
                  {!paymentCompleted && (
                    <IconButton
                      buttonType={ICON_BUTTON_TYPES.hoverBackground}
                      onClick={() => setShowEditTxHashInput(true)}
                    >
                      <AiTwotoneEdit size={20} className="icon" />
                    </IconButton>
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
                <IconButton
                  buttonType={ICON_BUTTON_TYPES.hoverBackground}
                  onClick={connectWalletHandler}
                >
                  <FaWallet size={15} className="icon" />
                </IconButton>
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
                  <BsCheck2Circle size={18} />
                ) : (
                  <BiTimeFive size={18} />
                )}
                <span>{paymentCompleted ? 'Validated' : 'Pending'}</span>
              </div>
              {!paymentCompleted && (
                <Button
                  disable={!order?.active ? true : false}
                  size="x"
                  isLoading={isValidating}
                  buttonType={BUTTON_TYPES.outlineRed}
                  onClick={() =>
                    mutateValidateOrder({
                      orderId: order?._id,
                      transaction_hash: txHash,
                      from: address,
                    })
                  }
                >
                  Validate
                </Button>
              )}
            </div>
          </div>
        </TransactionInfoBox>
      </LeftContentBox>
      <UserInfoBox seller={seller} />
    </DetailsBoxContainer>
  );
};

export default OrderDetailBox;
