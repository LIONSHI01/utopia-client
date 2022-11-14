import styled, { css } from 'styled-components';
import { device } from '../../../styles/devices';

export const NavbarContainer = styled.div`
  display: none;
  align-items: center;
  height: 5rem;
  width: 100%;
  background-color: var(--white);
  padding: 1rem 3rem;

  .sidebar_open_btn {
    margin-right: 2rem;
    height: 100%;
    cursor: pointer;
  }

  .user_section {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .sesarch_bar {
    margin-left: auto;
  }

  @media ${device.tablet} {
    display: flex;
  } ;
`;

// export const UserSummaryWrapper = styled.div``;
// export const ProfileSectionWrapper = styled.div``;
// export const ExploreSectionWrapper = styled.div``;
// export const AuthSectionWrapper = styled.div``;
// export const UserSectionWrapper = styled.div``;
// export const UserSectionWrapper = styled.div``;
