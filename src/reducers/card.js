import * as types from '../constants';

const card = (state, action) => {
  switch(action.type) {
    case types.ADD_CARD:
      return {
        cardId: action.payload.cardId,
        cardName: action.payload.cardName,
        description: '',
        comments: [],
      };
    case types.REMOVE_CARD:
      return state.cardId !== action.payload.cardId;
    case types.EDIT_DESCRIPTION_CARD:
      if (state.cardId !== action.payload.cardId) {
        return state;
      }

      return {
        ...state,
        description: action.payload.description
      }
    default:
      return state;
  }
}

export default card;
