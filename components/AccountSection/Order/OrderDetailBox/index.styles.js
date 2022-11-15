import styled from 'styled-components';
import { device } from '../../../../styles/devices';

export const DetailsBoxContainer = styled.div`
  display: grid;
  grid-template-columns: 4fr 1.25fr;
  gap: 2rem;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column-reverse;
  }

  @media ${device.mobileL} {
    font-size: var(--fs-ss);
    padding: 1.5rem;
  }
`;

export const LeftContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TransactionInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--black-light-2);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 2.5rem;
  font-size: var(--fs-s);
  font-weight: 100;
  height: 100%;

  & > * {
    display: flex;
    gap: 2rem;
  }

  @media ${device.mobileL} {
    font-size: var(--fs-ss);
    padding: 1.5rem;
  }

  .heading {
    font-size: var(--fs);
    font-weight: 500;
    margin-bottom: var(--mg-s);
    color: var(--black);
  }

  .details_box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
  }

  .title_col {
    font-weight: 400;
  }

  .content_col {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      display: block;
      word-break: break-all;
    }
  }

  .icon {
    cursor: pointer;
  }

  .validation {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;
    font-style: italic;
    color: var(--red);
  }

  .completedStatus {
    color: var(--green);
  }

  .content_col_transactionHash {
    span {
      display: block;
      word-break: break-all;
    }
  }
`;

export const EditTxHashBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .edit-buttons {
    display: flex;
    gap: 1rem;
    align-self: flex-end;
  }
`;
