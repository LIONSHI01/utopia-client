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
  color: ${({ theme }) => theme.textLight2};
  border-radius: var(--br-m);
  background-color: ${({ theme }) => theme.dropdownBG};
  padding: 2.5rem;
  font-size: var(--fs-s);
  font-weight: 100;
  height: 100%;
  box-shadow: var(--bs-s);

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
    color: ${({ theme }) => theme.textDark};
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

    span,
    a {
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

  .seller_claim_record {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    a {
      text-decoration: underline;
      :hover {
        color: var(--primary);
      }
    }
  }

  .seller_claim_btn {
    align-self: flex-end;
    display: flex;
    flex-direction: column;

    p {
      font-size: 0.8rem;
      color: var(--primary);
    }
  }

  .seller_claim_date {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
