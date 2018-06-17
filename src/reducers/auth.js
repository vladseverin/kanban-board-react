import * as types from '../constants/auth';

const initialState = {
  username: null,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: 
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
}
