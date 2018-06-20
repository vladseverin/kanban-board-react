import * as types from '../constants/board';

export const addList = (listId, name) => {
  return {
    type: types.ADD_LIST,
    payload: { listId, name }
  }
};

export const addCard = (listId, cardId, cardName) => {
  return {
    type: types.ADD_CARD,
    payload: { listId, cardId, cardName }
  }
};
