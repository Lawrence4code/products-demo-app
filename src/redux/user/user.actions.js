import userActionTypes from './user.types';

export const login = (user) => ({
  type: userActionTypes.LOGIN,
  payload: user,
});

export const logout = () => ({
  type: userActionTypes.LOGOUT,
});

export const authorize = (user) => ({
  type: userActionTypes.RE_AUTH,
  payload: user,
});
