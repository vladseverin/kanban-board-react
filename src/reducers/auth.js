import * as types from "../constants/auth";

const token = localStorage.getItem("KANABAN_TOKEN");

const initialState = {
  isAuthenticated: !!token,
  username: null,
  token: token
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload
      };
    case types.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: null,
        token: ""
      };
    default:
      return state;
  }
}
