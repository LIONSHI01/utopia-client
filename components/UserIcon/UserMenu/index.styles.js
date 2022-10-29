import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-75%, 105%);

  width: 15rem;
  padding: 1.5rem;
  border-radius: var(--br-s);
  box-shadow: var(--bs-s);
  background-color: var(--white);
  z-index: 100;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .signout-btn,
  .list-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--fs-s);
    font-weight: 100;
    color: var(--black-light-2);

    :hover {
      color: var(--primary);
    }
  }

  .signout-btn {
    cursor: pointer;
    font-size: var(--fs-s) !important;
  }
`;
