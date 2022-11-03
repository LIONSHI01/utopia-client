import styled from 'styled-components';

export const SectionContainer = styled.div`
  width: 100%;
`;
export const ContentsContainer = styled.div`
  margin: 5rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;

  & > * {
    padding: 3rem;
    background-color: var(--grey-light-3);
    border-radius: var(--br-x);
    box-shadow: var(--bs-s);
    border: 1px solid var(--black-light-3);
  }

  h3 {
    font-size: var(--fs-x);
    line-height: 0;
  }
  label {
    color: var(--black-light-2);
  }
  .profile-buttons-group {
    margin-top: var(--mg-m);
    display: flex;
    gap: 3rem;
  }
`;
