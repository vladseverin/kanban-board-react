import * as types from '../constants/board';

export const addList = (id, name) => {
  return {
    type: types.ADD_LIST,
    payload: {id, name}
  }
};

export const addCard = (id, name) => {
  return {
    type: types.ADD_CARD,
    payload: {id, name}
  }
};
