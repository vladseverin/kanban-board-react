import { combineReducers } from 'redux'
import * as types from '../constants';
import card from './card';

const initialState = {
  allIds: ['0', '1', '2', '3'],
  byIds: {
    '0': {
      nameList: 'TODO',
      _id: '0',
      cards: [],
    },
    '1': {
      nameList: 'In Progress',
      _id: '1',
      cards: [],
    },
    '2': {
      nameList: 'Testing',
      _id: '2',
      cards: [],
    },
    '3': {
      nameList: 'Done',
      _id: '3',
      cards: [],
    },
  }
}

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      return [...state, action.payload.listId];
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      return {
        ...state,
        [action.payload.listId]: {
          _id: action.payload.listId,
          nameList: action.payload.name,
          cards: [],
        }
      };
    case types.EDIT_LIST_TITLE:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          nameList: action.payload.title,
        }
      };
    case types.ADD_CARD:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          cards: [
            ...state[action.payload.listId].cards,
            card(undefined, action),
          ]
        }
      };
    case types.REMOVE_CARD:
      return {
        ...state, 
        [action.payload.listId]: {
          ...state[action.payload.listId],
          cards: [
            ...state[action.payload.listId].cards
              .filter(remove => 
                card(remove, action)
              ),
          ],
        },
      };
    case types.EDIT_DESCRIPTION_CARD:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          cards: [
            ...state[action.payload.listId].cards
              .map(c => card(c, action)),
          ]
        }
      };
    case types.ADD_COMMENT_CARD:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          cards: [
            ...state[action.payload.listId].cards
              .map(c => card(c, action)),
          ]
        }
      };
    case types.REMOVE_COMMENT_CARD:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default combineReducers({
  allIds,
  byIds
});
