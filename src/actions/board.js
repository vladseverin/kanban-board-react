import * as types from '../constants/board';

export const addList = (listId, name) => ({
  type: types.ADD_LIST,
  payload: { listId, name },
});

export const addCard = (listId, cardId, cardName) => ({
  type: types.ADD_CARD,
  payload: { listId, cardId, cardName },
});

export const editListTitle = (listId, title) => ({
  type: types.EDIT_LIST_TITLE,
  payload: { listId, title },
});

export const removeCard = (listId, cardId) => ({
  type: types.REMOVE_CARD,
  payload: { listId, cardId },
});

export const editDescription = (listId, cardId, description) => ({
  type: types.EDIT_DESCRIPTION_CARD,
  payload: { listId, cardId, description },
});

export const addComment = (listId, cardId, comment) => ({
  type: types.ADD_COMMENT_CARD,
  payload: { listId, cardId, comment },
});

export const removeComment = (listId, cardId, commentId) => ({
  type: types.REMOVE_COMMENT_CARD,
  payload: { listId, cardId, commentId },
});
