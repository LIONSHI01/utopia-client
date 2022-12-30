import styled, { css } from 'styled-components';
import { device } from '../../styles/devices';

const stickyStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: var(--bs-s);
  z-index: 1000;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.background};
  width: 100%;
  z-index: 1000;

  ${(props) => props.sticky && stickyStyles}

  @media ${device.tablet} {
    display: none;
  }

  .react_tool_tip_styles {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textDark};
    z-index: 1100;
    padding: 8px;
    opacity: 1 !important;
  }
`;

export const HeaderWrapper = styled.div`
  height: 9rem;
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  z-index: 1000;

  .logo {
    margin-right: 5rem;
    display: flex;
    align-items: center;

    h2 {
      line-height: 0;
      font-family: var(--ff-display);
      font-size: 3.8rem;
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-left: auto;

    span {
      font-size: var(--fs);
      color: ${({ theme }) => theme.textLight2};
    }
  }

  .auth-buttons {
    display: flex;
    gap: 1rem;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3.7rem;
    width: 3.7rem;
    color: ${({ theme }) => theme.textLight2};
    position: relative;
    border-radius: 100px;
    cursor: pointer;

    :hover {
      background-color: ${({ theme }) => theme.dropdownHover};
      color: ${({ theme }) => theme.textDark};
    }
  }

  .noti-number {
    position: absolute;
    top: 0.1rem;
    right: -0.1rem;
    background-color: red;
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;

    span {
      color: var(--white);
      line-height: 0;
      font-size: var(--fs-sss);
    }
  }
`;

export const StickyFillinSpace = styled.div`
  height: ${(props) => (props.sticky ? '11rem' : 0)};

  @media ${device.tablet} {
    display: none;
  }
`;
