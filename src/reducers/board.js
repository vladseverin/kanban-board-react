import { combineReducers } from 'redux'
import * as types from '../constants';

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
    case types.ADD_CARD:
      return {
        ...state,
        [action.payload.listId]: {
          ...state[action.payload.listId],
          cards: [
            ...state[action.payload.listId].cards,
            { 
              cardId: action.payload.cardId, 
              cardName: action.payload.cardName
            }
          ],
        }
      };
    default:
      return state;
  }
}

export default combineReducers({
  allIds,
  byIds
});
