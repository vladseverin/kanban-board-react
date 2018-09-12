import { combineReducers } from 'redux';
// eslint-disable-next-line
import card from './card';

export const ADD_LIST = Symbol('board/ADD_LIST');
export const REMOVE_LIST = Symbol('board/REMOVE_LIST');
export const EDIT_LIST_TITLE = Symbol('board/EDIT_LIST_TITLE');

export const ADD_CARD = Symbol('board/ADD_CARD');
export const REMOVE_CARD = Symbol('board/REMOVE_CARD');
export const EDIT_CARD_TITLE = Symbol('board/EDIT_CARD_TITLE');

export const EDIT_DESCRIPTION_CARD = Symbol('popup/EDIT_DESCRIPTION_CARD');
export const ADD_COMMENT_CARD = Symbol('popup/ADD_COMMENT_CARD');
export const REMOVE_COMMENT_CARD = Symbol('popup/REMOVE_COMMENT_CARD');

const initialState = {
  allIds: ['0', '1', '2', '3', '4'],
  byIds: {
    0: {
      nameList: 'TODO',
      _id: '0',
      cards: [],
    },
    1: {
      nameList: 'In Progress',
      _id: '1',
      cards: [],
    },
    2: {
      nameList: 'Testing',
      _id: '2',
      cards: [],
    },
    3: {
      nameList: 'Done',
      _id: '3',
      cards: [],
    },
  },
};

export const addList = (listId, name) => ({
  type: ADD_LIST,
  payload: { listId, name },
});

export const addCard = (listId, cardId, cardName) => ({
  type: ADD_CARD,
  payload: { listId, cardId, cardName },
});

export const editListTitle = (listId, title) => ({
  type: EDIT_LIST_TITLE,
  payload: { listId, title },
});

export const removeCard = (listId, cardId) => ({
  type: REMOVE_CARD,
  payload: { listId, cardId },
});

export const editDescription = (listId, cardId, description) => ({
  type: EDIT_DESCRIPTION_CARD,
  payload: { listId, cardId, description },
});

export const addComment = (listId, cardId, comment) => ({
  type: ADD_COMMENT_CARD,
  payload: { listId, cardId, comment },
});

export const removeComment = (listId, cardId, commentId) => ({
  type: REMOVE_COMMENT_CARD,
  payload: { listId, cardId, commentId },
});

const allIdsMap = {
  [ADD_LIST]: (state, action) => (
    [...state, action.payload.listId]
  ),
};

const byIdsMap = {
  [ADD_LIST]: (state, action) => ({
    ...state,
    [action.payload.listId]: {
      _id: action.payload.listId,
      nameList: action.payload.name,
      cards: [],
    },
  }),
  [EDIT_LIST_TITLE]: (state, action) => ({
    ...state,
    [action.payload.listId]: {
      ...state[action.payload.listId],
      nameList: action.payload.title,
    },
  }),
  [ADD_CARD]: (state, action) => ({
    ...state,
    [action.payload.listId]: {
      ...state[action.payload.listId],
      cards: [...state[action.payload.listId].cards, card(undefined, action)],
    },
  }),
  [REMOVE_CARD]: (state, action) => ({
    ...state,
    [action.payload.listId]: {
      ...state[action.payload.listId],
      cards: [...state[action.payload.listId].cards.filter(remove => card(remove, action))],
    },
  }),
  [EDIT_DESCRIPTION_CARD]: (state, action) => ({
    ...state,
    [action.payload.listId]: {
      ...state[action.payload.listId],
      cards: [...state[action.payload.listId].cards.map(c => card(c, action))],
    },
  }),
  [ADD_COMMENT_CARD]: (state, action) => ({
    ...state,
    [action.payload.listId]: {
      ...state[action.payload.listId],
      cards: [...state[action.payload.listId].cards.map(c => card(c, action))],
    },
  }),
  [REMOVE_COMMENT_CARD]: (state, action) => ({
    ...state,
    [action.payload.listId]: {
      ...state[action.payload.listId],
      cards: [...state[action.payload.listId].cards.map(c => card(c, action))],
    },
  }),
};

const allIds = (state = initialState.allIds, action) => {
  const reduceFn = allIdsMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
};

const byIds = (state = initialState.byIds, action) => {
  const reduceFn = byIdsMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
};

export default combineReducers({
  allIds,
  byIds,
});
