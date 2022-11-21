import styled from 'styled-components';
import { device } from '../../../styles/devices';

export const SectionContainer = styled.div`
  width: 100%;
`;
export const ContentsContainer = styled.div`
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media ${device.laptop} {
    margin: 5rem;
  }
  @media ${device.tablet} {
    margin: 5rem;
  }

  & > * {
    padding: 3rem;
    background-color: ${({ theme }) => theme.dropdownBG};
    border-radius: var(--br-x);
    box-shadow: var(--bs-s);
    /* border: 1px solid var(--black-light-3); */
  }

  h3 {
    font-size: var(--fs-x);
    line-height: 0;
  }
  label {
    color: ${({ theme }) => theme.textLight2};
  }
  .profile-buttons-group {
    margin-top: var(--mg-m);
    display: flex;
    gap: 3rem;
  }
`;
