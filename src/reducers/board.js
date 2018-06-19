import * as types from '../constants';

const initialState = {
  lists: [
    {
      listId: 123,
      nameList: 'Title',
      cards: [
        {
          cardId: 1233,
          cardName: 'Todo',
        }
      ],
    }
  ],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_LIST:
      return {
        ...state,
        lists: [
            ...state.lists,
            {
              listId: action.payload.id,
              nameList: action.payload.name,
            }
        ]
      };
    case types.ADD_CARD:
      return state;
    default:
      return state;
  }
}
