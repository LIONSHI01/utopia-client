import styled from 'styled-components';

export const SectionContainer = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  width: 100%;
`;

export const CollectionSection = styled.div`
  .heading {
    display: block;
    font-size: var(--fs-xl);
    line-height: 0;
    font-weight: 500;
    /* margin-bottom: var(--mg-s); */
  }

  .display-zone {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const CreateButtonWrapper = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  padding: 1rem 2rem;
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 100px;
  box-shadow: var(--bs-m);
  z-index: 1000;
  cursor: pointer;

  span {
    color: var(--white);
    font-size: var(--fs);
  }
`;
