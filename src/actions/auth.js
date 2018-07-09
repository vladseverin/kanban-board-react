import * as types from "../constants/auth";

export const login = username => {
  return {
    type: types.LOGIN,
    payload: username
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT
  };
};
