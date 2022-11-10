import { ORDER_ACTION_TYPES } from './order.types';

const INITIAL_ORDER_STATE = {
  selectedOrder: {},
  selectedOrderBuyer: {},
};

export const orderReducer = (state = INITIAL_ORDER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTION_TYPES.SET_SELECTED_ORDER:
      return {
        ...state,
        selectedOrder: payload,
      };

    case ORDER_ACTION_TYPES.SET_SELECTED_ORDER_BUYER:
      return {
        ...state,
        selectedOrderBuyer: payload,
      };

    default:
      return state;
  }
};
