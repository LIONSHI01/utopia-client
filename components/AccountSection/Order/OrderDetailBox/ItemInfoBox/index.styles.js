import styled from 'styled-components';

export const ItemInfoBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--black-light-2);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 1.5rem;

  .heading {
    font-size: var(--fs);
    font-weight: 500;
    margin-bottom: var(--mg-s);
    color: var(--black);
  }

  .item_details_wrapper {
    display: flex;
    gap: 2rem;
    font-size: var(--fs-s);
    font-weight: 100;
  }

  .details_description {
    width: 45%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item-title {
    font-size: var(--fs);
    font-weight: 400;
  }

  .image_container {
    position: relative;
    height: 20rem;
    width: 15rem;
    border-radius: var(--br-m);
    overflow: hidden;
  }

  .edit-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;
