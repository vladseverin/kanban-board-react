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

export const editListTitle = (listId, title) => {
  return {
    type: types.EDIT_LIST_TITLE,
    payload: { listId, title }
  }
};

export const removeCard = (listId, cardId) => {
  return {
    type: types.REMOVE_CARD,
    payload: { listId, cardId }
  }
}

export const editDescription = (listId, cardId, description) => {
  return {
    type: types.EDIT_DESCRIPTION_CARD,
    payload: { listId, cardId, description }
  }
}

export const addComment = (listId, cardId, comment) => {
  return {
    type: types.ADD_COMMENT_CARD,
    payload: { listId, cardId, comment }
  }
}

export const removeComment = (listId, cardId, commentId) => {
  return {
    type: types.REMOVE_COMMENT_CARD,
    payload: { listId, cardId, commentId }
  }
}


