import styled, { css } from 'styled-components';

const showUpStyles = css`
  opacity: 1;
  transform: translate(-50%, -50%);
  visibility: visible;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -45%);

  display: flex;
  flex-direction: column;

  min-width: 40rem;
  max-width: 80rem;
  min-height: 30rem;

  border-radius: var(--br-x);
  box-shadow: var(--bs-m);

  padding: 3rem;
  background-color: var(--white);
  z-index: 2000;
  transition: all 0.3s ease-in-out 0.1s;

  opacity: 0;
  visibility: hidden;

  ${(props) => props.showup && showUpStyles}

  .standard_text {
    font-size: var(--fs-s);
    font-weight: 400;
    text-transform: uppercase;
    color: var(--black-light-2);
  }
`;

export const ContentsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--mg-m);

  .upper_part {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--mg-m);
  }

  .heading {
    font-size: var(--fs-xxl);
    font-weight: 500;
    color: var(--black);
  }
`;

export const ItemDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .details_wrapper {
    display: flex;
  }

  .item_details {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .item_image {
    position: relative;
    height: 6rem;
    width: 6rem;
    border-radius: var(--br-m);
    overflow: hidden;
  }
  .item_title {
    display: block;
    font-size: var(--fs-s);
  }

  .item_price {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .item_price_eth_image {
    position: relative;
    height: 1.5rem;
    width: 1.5rem;
  }

  .item_price_number {
    font-size: var(--fs-s);
    font-weight: 500;
  }
`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-bottom: 1px solid var(--grey-light-2);
  padding: 3rem 0;

  .remind_connection_box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .remind_connection_text {
    font-size: var(--fs-s);
    color: var(--white);
    text-align: center;
  }

  .ac_balance_box {
    display: flex;
    background-color: var(--black);
    height: 5rem;
    width: 100%;
    border-radius: var(--br-m);
    align-items: center;
    padding: 1rem 2rem;

    span {
      font-size: var(--fs);
      font-weight: 400;
      color: var(--white);
    }
  }

  .account_balance {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    background-color: var(--white);
    border-radius: 100px;
    /* padding: 0.5rem; */
  }

  .account_eth_image {
    position: relative;
    height: 1.5rem;
    width: 1.5rem;
  }

  .walletAddress {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.5rem;
    width: 100%;
    background-color: var(--white);
    border: 2px solid var(--black);
    border-radius: var(--br-m);

    span {
      word-break: break-all;
      font-size: var(--fs-s);
      font-weight: 500;
    }
  }

  .network_warning {
    font-size: var(--fs-ss);
    color: var(--red);
    text-align: center;
    word-break: break-all;
  }
`;

export const PaymentSection = styled.div`
  .payment_wrapper {
    display: flex;
    align-items: center;
    margin-bottom: var(--mg-m);
  }

  .item_price {
    margin-left: auto;
    display: flex;
    flex-direction: column;
  }

  .item_eth_value {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .item_usd_value {
    align-self: flex-end;
    font-size: var(--fs-ss);
    color: var(--black-light-2);
    font-weight: 100;
  }

  .item_price_eth_image {
    position: relative;
    height: 2rem;
    width: 2rem;
  }

  .item_eth_number {
    font-size: var(--fs-xl);
    font-weight: 500;
  }
`;
