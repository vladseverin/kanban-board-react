import * as types from '../constants/auth';

export const login = username => ({
  type: types.LOGIN,
  payload: username,
});

export const logout = () => ({
  type: types.LOGOUT,
});
