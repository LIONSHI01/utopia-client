import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { postReducer } from './post/post.reducer';
import { orderReducer } from './order/order.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  order: orderReducer,
});
