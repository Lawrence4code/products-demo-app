import userActionTypes from './user.types';

export const login = (user) => {
  return {
    type: userActionTypes.LOGIN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: userActionTypes.LOGOUT,
  };
};

export const authorize = (user) => {
  return {
    type: userActionTypes.RE_AUTH,
    payload: user,
  };
};
