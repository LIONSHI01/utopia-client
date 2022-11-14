import styled from 'styled-components';
import { device } from '../../../../styles/devices';

export const ItemInfoBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--black-light-2);
  border-radius: var(--br-m);
  background-color: var(--grey-light-3);
  padding: 2.5rem;

  @media ${device.mobileL} {
    padding: 1.5rem;
  }

  .edit-btn {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
  }

  .heading {
    display: flex;
    align-items: flex-start;
    align-items: center;
    gap: 1rem;
    margin-bottom: var(--mg-m);
    line-height: 0;

    @media ${device.tablet} {
      /* flex-direction: column;
      align-items: center;
      gap: 1.5rem; */
    }
  }

  .order_id {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4 {
      color: var(--black);
      font-size: var(--fs);
      font-weight: 500;
      margin-bottom: var(--mg-m);
    }

    span {
      font-size: var(--fs-s);
    }
  }

  .order_details {
    display: flex;
    gap: 1rem;
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
`;

export const ItemDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1.5fr;
  gap: 2rem;
  font-size: var(--fs-s);
  font-weight: 100;

  .details_description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .details_header {
    display: flex;
    align-items: baseline;
    gap: 1rem;
  }

  .item-status {
    font-size: var(--fs-ss);
    padding: 0.5rem;
    border-radius: var(--br-x);
    background-color: ${(props) =>
      props.isItemActive ? '#4ca23030' : '#ffabc130'};
  }

  .item_status_unlisted {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

  .details_category {
    text-transform: capitalize;
    font-size: var(--fs-ss);
  }

  .details_description {
    font-size: var(--fs-ss);
  }

  .image_container {
    position: relative;
    height: 20rem;
    width: 15rem;
    border-radius: var(--br-m);
    overflow: hidden;
    /* filter: grayscale(); */
    filter: ${(props) => (props.isItemActive ? 'none' : 'grayscale(80%)')};
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

  .order_comment_content {
    font-size: var(--fs-s);
  }
`;

export const CommentSection = styled.div`
  .comment_wrapper {
    position: relative;
    display: flex;
    flex-direction: column;

    gap: 1rem;
  }
  .comment_user {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .username {
    font-size: var(--fs-ss);
    font-weight: 500;
  }

  .comment_details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .order_comment_content {
    font-size: var(--fs-s);
    font-weight: 100;
  }

  .edit_button {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
