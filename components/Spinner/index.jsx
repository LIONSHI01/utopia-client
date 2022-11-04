import React from 'react';
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

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

const Spinner = ({ size = 30, message }) => {
  return (
    <SpinnerWrapper>
      <BeatLoader
        color="var(--primary)"
        // loading={loading}
        // cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>{message}</p>
    </SpinnerWrapper>
  );
};

export default Spinner;
