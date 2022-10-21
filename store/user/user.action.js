import { USER_ACTION_TYPES } from './user.types';
import { createAction } from '../../utils/createAction';

export const setCurrentUser = (userData) => {
  createAction(USER_ACTION_TYPES.SET_USER_PROFILE, userData);
};
