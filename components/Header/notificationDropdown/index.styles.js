import styled, { css } from 'styled-components';

const boxShowUpStyles = css`
  width: 30rem;
  height: 45rem;
  visibility: visible;
  opacity: 1;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transform: translate(-80%, 10%);
  width: 0rem;
  height: 0rem;

  background-color: var(--white);
  box-shadow: var(--bs-s);
  border-radius: var(--br-m);
  /* padding-top: 4rem; */

  transition: all 0.3s ease-in-out;

  opacity: 0;
  visibility: hidden;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    right: 35px;
    background-color: var(--white);
    height: 2rem;
    width: 2rem;
    transform: translateY(-25%) rotate(45deg);
  }

  ${(props) => props.showUp && boxShowUpStyles}
`;

export const MasterContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const ContentContainer = styled.div`
  overflow: scroll;
  min-width: 30rem;

  .heading {
    padding: 2rem 0;
    font-size: 2rem;
    text-align: center;
  }
`;

export const MessageItemWrapper = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr min-content;
  padding: 1.5rem;
  cursor: pointer;
  width: 100%;
  background-color: var(--grey-light-2);
  font-size: var(--fs-ss);
  font-weight: 100;
  border-bottom: 1px solid var(--grey-light-1);

  :hover {
    background-color: var(--grey-light-1);
  }

  .contents {
    margin-left: 1rem;
    margin-right: 3rem;
    letter-spacing: 0.5px;
    color: var(--black-light-2);
  }

  .period {
    color: var(--black-light-2);
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
  background-color: var(--primary-light-4);

  .icon {
    color: var(--primary-light);
  }
`;
