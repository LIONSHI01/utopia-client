import { ORDER_ACTION_TYPES } from './order.types';
import { createAction } from '../../utils/createAction';

export const setSelectedOrder = (orderObject) =>
  createAction(ORDER_ACTION_TYPES.SET_SELECTED_ORDER, orderObject);

export const setSelectedOrderBuyer = (buyerObject) =>
  createAction(ORDER_ACTION_TYPES.SET_SELECTED_ORDER_BUYER, buyerObject);
