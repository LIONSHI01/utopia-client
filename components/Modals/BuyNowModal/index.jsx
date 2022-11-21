import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { selectEthPrice } from '../../../store/post/post.selector';
import {
  IoMdClose,
  VscFoldDown,
  GrPowerCycle,
  BsArrowCounterclockwise,
} from '../../ReactIcons';
import { useCreatePayment } from '../../../utils/reactQueryHooks/useCreatePayment';

import { createOrder } from '../../../utils/apiData/orderRequest';
import {
  ModalContainer,
  ButtonsGroup,
  ContentsContainer,
  ItemDetailsWrapper,
  PaymentSection,
} from './index.styles';

import {
  Button,
  BUTTON_TYPES,
  Overlay,
  MetaMaskButton,
  IconButton,
  ICON_BUTTON_TYPES,
  WaitingModal,
} from '../../index';
import ETHIcon from '../../../assets/image/eth-icon.png';
import { toast } from 'react-toastify';

const verifyBalanceSufficient = (balance, itemValue) => {
  let isSufficient = false;
  const difference = balance - itemValue;

  if (difference > 0) {
    isSufficient = true;
  } else {
    isSufficient = false;
  }
  return { difference, isSufficient };
};

const BuyNowModal = ({ showup, setShowup, post, user, refetchUser }) => {
  // 1) Check if connected to wallet
  // 2) if not, ask to connect
  // 3) Check if connected to chain 0x5
  // 4) if not, ask permission to change to chain 0x5
  // 5) Allow to process tx

  const {
    isConnecting,
    ethBalance,
    chainId,
    isConnectedWallet,
    walletAddress,
    isBuying,
    isTxCompleted,
    transactionHash,
    connectWalletHandler,
    sendTransactionRequest,
    switchAccountsHandler,
  } = useCreatePayment(post?.price);

  const ethQuote = useSelector(selectEthPrice);

  const itemUsdValue = (post?.price * ethQuote).toFixed(2);
  const { difference, isSufficient } = verifyBalanceSufficient(
    ethBalance,
    post?.price
  );

  // STATE
  // Popup Waiting modal when tx complete
  const [showWaitingModal, setShowWaitingModal] = useState(false);

  const onConfirmHandler = async () => {
    sendTransactionRequest().then(async (res) => {
      if (res.code === 4001) return toast.warn('Transaction cancelled.');

      console.log('From BuyNowModal:', {
        userId: user?.id,
        sellerId: post?.postedBy?.id,
        postId: post?.id,
        value: post?.price,
        hash: res,
      });

      try {
        await createOrder({
          userId: user?.id,
          sellerId: post?.postedBy?.id,
          postId: post?.id,
          value: post?.price,
          hash: res,
        });
        refetchUser();
      } catch (err) {
        console.log(err);
      }
    });
  };

  useEffect(() => {
    if (isTxCompleted === true) {
      setShowup(false);
      setShowWaitingModal(true);
    }
  }, [isTxCompleted, setShowup]);

  const waitModalTitle = 'Purchase Completed!';
  const waitModalMsg = `Transaction to buy ${post?.title} is being processing. Please validate the transaction in your dashboard a few minutes later. You may view the transaction on chain.`;
  const waitingModalLink = `https://goerli.etherscan.io/tx/${transactionHash}`;

  return (
    <>
      <ModalContainer showup={showup}>
        <ContentsContainer>
          <div className="upper_part">
            <span className="heading">Buy</span>
            <IconButton
              size="x"
              buttonType={ICON_BUTTON_TYPES.hoverBackground}
              onClick={() => setShowup(false)}
            >
              <IoMdClose size={25} />
            </IconButton>
          </div>
          <ItemDetailsWrapper>
            <p className="standard_text">Item</p>
            <div className="details_wrapper">
              <div className="item_details">
                <div className="item_image">
                  <Image
                    src={post?.images[0]}
                    alt={post?.title}
                    objectFit="cover"
                    objectPosition="center"
                    layout="fill"
                  />
                </div>
                <p className="item_title">{post?.title}</p>
              </div>
              <div className="item_price">
                <div className="item_price_eth_image">
                  <Image
                    src={ETHIcon}
                    alt="eth-icon"
                    objectFit="contain"
                    objectPosition="center"
                    layout="fill"
                  />
                </div>
                <span className="item_price_number">{post?.price}</span>
              </div>
            </div>
          </ItemDetailsWrapper>

          <ButtonsGroup>
            <span className="standard_text">pay with</span>
            <div className="ac_balance_box">
              {isConnectedWallet ? (
                <>
                  <span>GoerliETH</span>
                  <div className="account_balance">
                    <div className="icon_wrapper">
                      <div className="account_eth_image">
                        <Image
                          src={ETHIcon}
                          alt="eth-icon"
                          objectFit="contain"
                          objectPosition="center"
                          layout="fill"
                        />
                      </div>
                    </div>

                    <span>{ethBalance?.toFixed(4)}</span>
                  </div>
                </>
              ) : (
                <div className="remind_connection_box">
                  <p className="remind_connection_text">Connect MetaMask</p>
                  <VscFoldDown size={18} color="var(--white)" />
                </div>
              )}
            </div>
            {walletAddress ? (
              <div className="account_balance_box">
                <div className="account_balance_details">
                  <div className="walletAddress">
                    <span>
                      Connected&nbsp;
                      {`${walletAddress?.substring(
                        0,
                        6
                      )}...${walletAddress?.substring(38)}`}
                    </span>
                  </div>
                  <button
                    className="wallet_switch_btn"
                    type="button"
                    onClick={switchAccountsHandler}
                  >
                    <BsArrowCounterclockwise size={23} />
                  </button>
                </div>
                {chainId === '0x5' ? null : (
                  <p className="network_warning">
                    Wrong network! Please switch to Goerli Testnet.
                  </p>
                )}
              </div>
            ) : (
              <MetaMaskButton
                isLoading={isConnecting}
                onClick={connectWalletHandler}
              />
            )}
          </ButtonsGroup>
        </ContentsContainer>
        <PaymentSection>
          <div className="payment_wrapper">
            <p className="standard_text">You pay</p>
            <div className="item_price">
              <div className="item_eth_value">
                <div className="item_price_eth_image">
                  <Image
                    src={ETHIcon}
                    alt="eth-icon"
                    objectFit="contain"
                    objectPosition="center"
                    layout="fill"
                  />
                </div>
                <span className="item_eth_number">{post?.price}</span>
              </div>
              <span className="item_usd_value">{`($${itemUsdValue})`}</span>
            </div>
          </div>

          {/* Buy Button: if Balance < price => "Insufficient fund: [price different]" */}
          <Button
            isLoading={isBuying}
            disable={isSufficient ? false : true}
            height="4.5rem"
            width="100%"
            fontSize="2.2rem"
            onClick={onConfirmHandler}
            buttonType={BUTTON_TYPES.base}
          >
            {isSufficient
              ? 'Buy'
              : `Insufficient fund: ${difference} GoerliETH`}
          </Button>
          {/* <p>{transactionHash}</p> */}
        </PaymentSection>
      </ModalContainer>

      <WaitingModal
        title={waitModalTitle}
        message={waitModalMsg}
        url={waitingModalLink}
        showup={showWaitingModal}
        setShowup={setShowWaitingModal}
      />
      {/* Don't let Overly control close modal here, not disburbing transaction by accident */}
      <Overlay showUp={showup} setShowUp={() => {}} />
    </>
  );
};

export default BuyNowModal;
