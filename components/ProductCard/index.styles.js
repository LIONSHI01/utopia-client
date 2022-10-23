import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 30rem;
  height: 42rem;
  border: 1px solid var(--black-light-3);
  border-radius: var(--br-m);
  overflow: hidden;
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
  height: 22rem;
  width: 100%;
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
    color: var(--black-light-2);
    font-weight: 400;
    line-height: 0;
  }

  .price {
    font-weight: 500;
    font-size: var(--fs);
    color: var(--black);
    margin-bottom: var(--mg-s);
  }

  .status {
    font-size: var(--fs-ss);
    color: var(--black-light-2);
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
    color: var(--black-light-3);

    :hover {
      color: var(--primary);
    }
  }
`;
