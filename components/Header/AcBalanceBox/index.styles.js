import styled from 'styled-components';

export const BoxContainer = styled.div`
  position: relative;
  border: 1px solid var(--black-light-3);
  border-radius: var(--br-m);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    border: 1px solid var(--black);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
      rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.8rem 0.5rem;

  .icon_container {
    position: relative;
    height: 2rem;
    width: 2rem;
  }

  .eth_number {
    font-size: 1.4rem !important;
  }
`;
