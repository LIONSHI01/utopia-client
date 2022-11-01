import styled from 'styled-components';

export const SectionContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

export const ContentsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5rem;

  .heading {
    display: block;
    font-size: var(--fs-xl);
    line-height: 0;
    font-weight: 500;
  }
`;

export const DisplayList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const CreateButtonWrapper = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  padding: 1rem 2rem;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 100px;
  box-shadow: var(--bs-m);
  z-index: 1000;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    background-color: var(--primary-dark);
  }

  span {
    color: var(--white);
    font-size: var(--fs);
  }
`;
