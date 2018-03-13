import { AUTH_USER_SET } from 'constants/session';

export const setAuthUser = action => {
  return {
    type: AUTH_USER_SET,
    authUser: action
  };
};
