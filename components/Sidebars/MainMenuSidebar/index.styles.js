import styled, { css } from 'styled-components';

const openSidebarStyles = css`
  transform: translateX(0%);
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: scroll;

  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 50rem;

  padding: 2rem;

  box-shadow: var(--bs-s);
  z-index: 2000;

  font-size: var(--fs-s);
  text-transform: capitalize;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;
  background-color: var(--grey-light-3);

  ${(props) => props.isOpen && openSidebarStyles}
`;
export const UserSummaryWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .user_info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .user_name {
    font-weight: 400;
    font-size: var(--fs-s);
  }
`;
export const ProfileSectionWrapper = styled.div`
  width: 100%;
  min-height: 27.5rem;
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  border-radius: var(--br-m);

  box-shadow: var(--bs-xs);
  overflow: hidden;
`;

export const ProfileItemWrapper = styled.div`
  color: var(--black-light-2);
  font-size: var(--fs-ss);
  cursor: pointer;

  :hover {
    background-color: var(--grey-light-2);
  }

  .item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.3rem;
    height: 100%;
    width: 100%;
  }

  .item_arrow {
    margin-left: auto;
  }
`;

export const AuthSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: var(--white);
  border-radius: var(--br-m);
  box-shadow: var(--bs-xs);
  padding: 2rem;
  /* margin-top: auto; */

  .buttons_group {
    display: flex;
    gap: 1rem;
  }
`;
