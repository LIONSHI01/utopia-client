import { POST_ACTION_TYPES } from './post.types';

const INITIAL_POST_STATE = {
  ethPrice: 0,
};

export const postReducer = (state = INITIAL_POST_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case POST_ACTION_TYPES.SET_ETH_PRICE:
      return {
        ...state,
        ethPrice: payload,
      };

    default:
      return state;
  }
};
