import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { AiTwotoneEdit } from 'react-icons/ai';
import { FaWallet } from 'react-icons/fa';

import { SectionContainer, EditTxHashBox } from './index.styles';
import { Button, BUTTON_TYPES, FormInputComp } from '../../../index';
import {
  deleteOrder,
  updateOrder,
} from '../../../../utils/apiData/orderRequest';

const OrderDetails = ({ order }) => {
  const router = useRouter();

  const [showEditTxHashInput, setShowEditTxHashInput] = useState(false);
  const [txHash, setTxHash] = useState(order?.transactionHash);
  const [address, setAddress] = useState(order?.from);
  const deleteOrderHandler = async () => {
    await deleteOrder(order?._id);
  };

  const cancelChanges = async () => {
    setTxHash(transactionHash);
    setAddress(from);
  };

  const updateTxHashHandler = async () => {
    if (txHash !== order?.transactionHash || address !== order?.from) {
      await updateOrder(order?._id, address, txHash);
      router.reload();
    } else {
      toast.error('You have not made any changes.');
    }
  };

  const connectWalletHandler = async () => {
    if (window.ethereum) {
      await window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((res) => {
          // Return the address of the wallet
          console.log(res);
          setAddress(res[0]);
        });
    } else {
      alert('Please install Metamask extension.');
    }
  };

  useEffect(() => {
    setTxHash(order?.transactionHash);
    setAddress(order?.from);
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
            <span className="status"> {order?.status}</span>
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
                <span className="transactionHash">
                  {txHash ||
                    'Please provide your payment transaction hash for payment validation'}
                </span>
                <AiTwotoneEdit
                  size={15}
                  className="icon"
                  onClick={() => setShowEditTxHashInput(true)}
                />
              </>
            )}
          </div>
        </div>
        <div className="row">
          <span className="title">Transaction validation:</span>
          <div className="contents">
            <span className="validation">Completed</span>
          </div>
        </div>
        <div className="row">
          <span className="title">Your payment address:</span>
          <div className="contents">
            <span>
              {address ||
                'Please log in with MetaMask to register your payment address for this transaction.'}
            </span>
            <FaWallet
              size={15}
              className="icon"
              onClick={connectWalletHandler}
            />
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
            onClick={updateTxHashHandler}
          >
            Save Changes
          </Button>
        </div>
        <Button
          size="x"
          buttonType={BUTTON_TYPES.outlineGrey}
          onClick={deleteOrderHandler}
        >
          Delete order
        </Button>
      </div>
    </SectionContainer>
  );
};

export default OrderDetails;
