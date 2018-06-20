import { combineReducers } from 'redux'
import * as types from '../constants';

const initialState = {
  allIds: ['0', '1'],
  byIds : {
    '0': {
      _id: '0',
      nameList: 'title',
      cards: [
        { 
          cardId: '1',
          cardName: 'ToDo',
        },
        {
          cardId: '2',
          cardName: 'ToDo 2',
        },
        {
          cardId: '3',
          cardName: 'ToDo 3',
        },
      ]
    },
    "1": {
      _id: '1',
      nameList: 'title',
      cards: [
        {
          cardId: '1',
          cardName: 'ToDo',
        },
        {
          cardId: '2',
          cardName: 'ToDo 2',
        },
        {
          cardId: '3',
          cardName: 'ToDo 3',
        },
      ]
    }
  }
}

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      return [...state, action.payload.id];
    default:
      return state;
  }
};

const byIds = (state = initialState.byIds, action) => {
  switch (action.type) {
    case types.ADD_LIST:
      return {
        ...state,
        [action.payload.id]: {
          _id: action.payload.id,
          nameList: action.payload.name,
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
