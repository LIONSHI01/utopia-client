import React from 'react';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: var(--fs);
  }
`;

const Spinner = ({ message }) => {
  return (
    <SpinnerWrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="var(--primary)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      <p>{message}</p>
    </SpinnerWrapper>
  );
};

export default Spinner;
