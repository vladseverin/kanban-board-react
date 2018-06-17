import * as types from '../constants/auth';

const token = localStorage.getItem('token');

const initialState = {
  isAuthenticated: !!token,
  username: null,
  token,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: 
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };
    default:
      return state;
  }
}
