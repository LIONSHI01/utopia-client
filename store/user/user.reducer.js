import { USER_ACTION_TYPES } from './user.types';

const INITIAL_USER_STATE = {
  currentUser: {},
};

export const userReducer = (state = INITIAL_USER_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_USER_PROFILE:
      return {
        ...state,
        currentUser: payload,
      };

    default:
      return state;
  }
};
