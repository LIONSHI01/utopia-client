import { createAction } from '../../utils/createAction';
import { POST_ACTION_TYPES } from './post.types';

export const setEthPrice = (priceData) =>
  createAction(POST_ACTION_TYPES.SET_ETH_PRICE, priceData);
