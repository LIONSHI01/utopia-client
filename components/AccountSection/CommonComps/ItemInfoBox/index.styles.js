import styled from 'styled-components';

export const ItemInfoBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--black-light-2);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 2.5rem;

  .heading {
    display: flex;
    align-items: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: var(--mg-m);
    line-height: 0;
  }

  .order_id {
    display: flex;
    gap: 0.5rem;

    h4 {
      color: var(--black);
      font-size: var(--fs);
      font-weight: 500;
    }

    span {
      font-size: var(--fs-s);
    }
  }

  .order_status {
    color: var(--black-light-2);
    font-size: var(--fs-ss);
    font-weight: 100;
  }

  .active {
    color: var(--green);
  }

  .order_activity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: var(--fs-s);
    margin-left: auto;
    line-height: 0;
    background-color: var(--black-light-3);
    padding: 0.8rem;
    border-radius: var(--br-x);

    span {
      text-transform: capitalize;
    }
  }

  .order_activity.order_completed {
    background-color: var(--primary-light-4);
    color: var(--primary);
  }

  .item_details_wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1.5fr;
    gap: 2rem;
    font-size: var(--fs-s);
    font-weight: 100;
  }

  .details_description {
    /* width: 45%; */
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item-title {
    font-size: var(--fs);
    font-weight: 400;
  }
  .details_value {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .details_value_eth {
    font-size: var(--fs-s);
    font-weight: 400;
  }

  .details_value_usd {
    font-size: var(--fs-ss);
    font-style: italic;
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
    bottom: 1rem;
    right: 2rem;
  }

  .buyer_confirmation {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .buyer_confirmation_reminder {
    font-size: 1.4rem;
    color: var(--red);
  }

  .buyer_confirmation_pending {
    display: flex;
    gap: 0.5rem;
    color: var(--red);

    p {
      font-style: italic;
      font-size: var(--fs-s);
    }
  }

  .buyer_confirmation_confirmed {
    color: var(--green);
    display: flex;
    gap: 0.5rem;
    font-style: italic;
  }

  .confirmation-status {
    display: flex;
    gap: 0.5rem;
    color: var(--green);
    font-style: italic;
  }
`;
