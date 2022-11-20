import styled from 'styled-components';
import { device } from '../../styles/devices';

export const CardContainer = styled.div`
  width: 25rem;
  height: 38rem;
  border: 1px solid ${({ theme }) => theme.textLight3};
  border-radius: var(--br-m);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    border: 1px solid ${({ theme }) => theme.textDark};
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
    position: relative;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .postedBy-name {
    text-transform: capitalize;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;
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
    font-weight: 500;
    font-size: var(--fs);
    color: ${({ theme }) => theme.textLight2};
    margin-bottom: var(--mg-s);
    display: flex;
    align-items: center;

    span {
      line-height: 0;
    }
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
