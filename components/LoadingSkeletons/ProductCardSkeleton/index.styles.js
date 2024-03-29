import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const CardContainer = styled.div`
  width: 25rem;
  height: 38rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: var(--br-m);

  @media ${device.mobileL} {
    width: 35rem;
    height: 45rem;
  }
`;

export const HeaderContaienr = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;

  span {
    font-size: var(--fs-ss);
    font-weight: 500;
  }

  .user-info {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .user_details {
    display: flex;
    flex-direction: column;
  }
  .postedBy-name {
    text-transform: capitalize;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;

  @media ${device.mobileL} {
    height: 23rem;
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 1rem;

  .details {
    display: flex;
    flex-direction: column;
    margin-bottom: var(--mg-s);
  }

  .title {
    font-size: var(--fs-s);
    color: ${({ theme }) => theme.textLight2};
    font-weight: 400;
    margin-bottom: var(--mg-s);
  }

  .price {
    margin: var(--mg-s) 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .icon-wrapper {
    position: relative;
    height: 2rem;
    width: 2rem;
  }

  .item-value {
    margin-left: 0.8rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textLight2};

    font-weight: 100;
  }

  .status {
    font-size: var(--fs-ss);
    color: ${({ theme }) => theme.textLight2};
  }

  .buttons-group {
    display: flex;
    justify-content: space-between;
  }

  .like-btn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.3s;

    :active {
      scale: 0.8;
    }
  }

  .icon {
    color: ${({ theme }) => theme.textLight3};

    :hover {
      color: var(--primary);
    }
  }

  .is_liked {
    color: var(--primary);
  }
`;
