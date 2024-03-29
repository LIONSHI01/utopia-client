import styled, { css } from 'styled-components';

const boxShowUpStyles = css`
  width: 30rem;
  height: 45rem;
  visibility: visible;
  opacity: 1;
`;

const contentsShowUpStyles = css`
  visibility: visible;
  opacity: 1;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  right: 0;
  transform: translate(10%, 105%);
  width: 0rem;
  height: 0rem;

  background-color: ${({ theme }) => theme.dropdownBG};
  box-shadow: var(--bs-s);
  border-radius: var(--br-m);

  transition: all 0.3s ease-in-out;

  opacity: 0;
  visibility: hidden;

  /* ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 35px;
    background-color: var(--white);
    height: 2rem;
    width: 2rem;
    transform: translateY(-25%) rotate(45deg);
  } */

  ${(props) => props.showUp && boxShowUpStyles}
`;

export const MasterContainer = styled.div`
  overflow: hidden;
  width: 100%;

  visibility: hidden;
  opacity: 0;

  ${(props) => props.showUp && contentsShowUpStyles}

  .heading {
    padding: 2rem 0;
    font-size: 2rem;
    text-align: center;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  min-width: 30rem;
  min-height: 30rem;
  max-width: 30rem;
  max-height: 40rem;

  border-bottom-left-radius: var(--br-x);
  border-bottom-right-radius: var(--br-x);

  .no-message {
    text-align: center;
    font-size: var(--fs);
    margin: auto 0;
  }
`;

export const MessageItemWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  padding: 1.5rem;
  cursor: pointer;
  width: 100%;
  background-color: var(--grey-light-2);
  font-size: var(--fs-ss);
  font-weight: 100;
  border-bottom: 1px solid var(--black-light-3);

  :hover {
    background-color: var(--grey-light-1);
  }

  :hover .delete_btn {
    display: flex;
  }

  .contents {
    margin-left: 1rem;
    margin-right: 1.5rem;
    letter-spacing: 0.5px;
    color: var(--black-light-2);
    word-break: break-all;
  }

  .period_box {
    color: var(--black-light-2);
    p {
      font-size: var(--fs-ss);
    }
  }

  .delete_btn {
    /* Hide before hover */
    display: none;

    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    height: 3rem;
    width: 3rem;
    border-radius: 100px;
    border: none;
    background-color: transparent;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s;
    color: var(--red);

    :active {
      scale: 0.85;
    }

    :hover {
      background-color: var(--white);
    }
  }
`;

const BaseIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 100px;
`;

export const HostIcon = styled(BaseIconWrapper)`
  background-color: var(--primary-light-4);

  .icon {
    color: var(--primary-light);
  }
`;

export const OrderIcon = styled(BaseIconWrapper)`
  background-color: #ffbccd;

  .icon {
    color: #ff5882;
  }
`;

export const OfferIcon = styled(BaseIconWrapper)`
  background-color: #c1eddd;

  .icon {
    color: #8ebaaa;
  }
`;
