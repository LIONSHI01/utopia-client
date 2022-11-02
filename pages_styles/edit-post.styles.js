import styled, { css } from 'styled-components';

const draggingStyles = css`
  background-color: var(--primary-light-2);
`;

export const EditPostContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh - 10rem);
  padding: 0 5rem;
  margin: 5rem 0;
`;

export const OutterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 40fr 60fr;
  gap: 2rem;
`;

export const ImageSection = styled.div`
  padding: 2rem;
  background-color: var(--white);
  box-shadow: var(--bs-s);
  border-radius: var(--br-m);

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const UploadImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 20rem;
  max-height: 40%;
  border: 2px dotted var(--primary-light);
  background-color: var(--uploadbg);
  border-radius: var(--br-s);

  .dropping-area {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) => props.isDragging && draggingStyles}
  }

  .inner-box {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      font-size: var(--fs);
      color: var(--black-light-2);
      margin-top: var(--mg-s);
    }

    span {
      font-size: var(--fs-s);
      color: var(--black-light-2);
      font-style: italic;
    }
  }
`;

export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .reminder {
    display: flex;
    gap: 1rem;
    align-items: center;
    /* padding: 1rem 0; */
    font-size: var(--fs-s);
    color: var(--black-light-2);
    margin: 2rem 0;
    align-self: center;
  }

  .reminder-box {
    height: 2.5rem;
    width: 2.5rem;
    background-color: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }

  .preview-area {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export const ImageItem = styled.div`
  /* position: relative; */

  .cover-text {
    text-align: center;
    color: var(--white);
    padding: 0.3rem;
    font-size: var(--fs-s);
    font-weight: 100;
  }

  .preview-box {
    position: relative;
    padding: 0.5rem;
    border-radius: var(--br-s);
    background-color: ${(props) =>
      props.index === 0 ? 'var(--black)' : 'transparent'};
  }

  .preview-image-container {
    position: relative;
    width: 13rem;
    height: 13rem;
    border-radius: var(--br-s);
    overflow: hidden;
    background-color: var(--black-light-3);

    :hover .buttons-group {
      display: unset;
    }
  }

  .image-index {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;

    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--fs-s);
    background-color: var(--black-light-3);
    border-radius: 100px;
    border: 2px solid var(--white);
  }

  .buttons-group {
    display: none;
  }

  .update-btn,
  .delete-btn {
    position: absolute;
    top: 1rem;
    height: 3rem;
    width: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: var(--black-light-2);
    border-radius: 100px;
    border: 2px solid var(--white);

    transition: all 0.3s;
    cursor: pointer;

    :hover {
      background-color: var(--black);
    }
  }

  .update-btn {
    left: 0.5rem;
  }

  .delete-btn {
    right: 0.5rem;
  }

  .btn-icon {
    color: var(--white);
    line-height: 0;
  }
`;

export const FormSection = styled.div`
  /* padding: 2rem; */
  background-color: var(--white);
  box-shadow: var(--bs-s);
  border-radius: var(--br-m);
`;
