import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: var(--mg-m);
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-bottom: 2.5rem;

  @media ${device.mobileL} {
    margin: var(--mg-m) 0;
  }

  .heading {
    font-size: var(--fs);
    margin-bottom: var(--mg-s);
  }

  .seller-container {
    display: flex;
    align-items: center;
    gap: 2rem;

    @media ${device.mobileL} {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .seller-image {
    position: relative;
    height: 10rem;
    width: 10rem;
    border-radius: 100px;
    overflow: hidden;
  }

  .placeholder {
    height: 10rem;
    width: 10rem;
    border-radius: 100px;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: var(--fs-xxxl);
      text-transform: capitalize;
    }
  }

  .profile {
    display: flex;
    flex-direction: column;
  }
  .name {
    font-size: var(--fs);
    margin-bottom: var(--mg-s);
  }

  .details {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${({ theme }) => theme.textLight2};
  }
  .item {
    display: flex;
    gap: 0.2rem;
    font-size: 1.3rem;
    font-weight: 100;

    span {
      font-weight: 500;
      color: ${({ theme }) => theme.textDark};
    }
  }
  .buttons-group {
    align-self: flex-start;
    display: flex;
    justify-content: end;
    gap: 1rem;
    margin-left: auto;
    height: 3rem;
    width: 30rem;

    @media ${device.mobileL} {
      align-self: unset;
      margin-left: unset;
      width: unset;
    }
  }
`;
