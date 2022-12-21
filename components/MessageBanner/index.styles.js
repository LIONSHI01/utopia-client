import styled from 'styled-components';

export const BannerWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 4rem;
  background-color: var(--primary);

  cursor: pointer;

  p {
    font-size: var(--fs-s);
  }

  .close-btn {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translate(-50%, -50%);
    margin-left: auto;
    cursor: pointer;
  }
`;
