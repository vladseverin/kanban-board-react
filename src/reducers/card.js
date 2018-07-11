import * as types from '../constants';

let commentId = 0;

const card = (state, action) => {
  switch (action.type) {
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
        description: action.payload.description,
      };
    case types.ADD_COMMENT_CARD:
      if (state.cardId !== action.payload.cardId) {
        return state;
      }

      const date = new Date();
      const time = `${date.getFullYear()}-${`0${date.getMonth() + 1}`.slice(
        -2,
      )}-${`0${date.getDate()}`.slice(-2)} ${`0${date.getHours()}`.slice(
        -2,
      )}:${`0${date.getMinutes()}`.slice(-2)}:${`0${date.getSeconds()}`.slice(-2)}`;

      commentId = `${+commentId + 1}`;

      return {
        ...state,
        comments: [
          ...state.comments,
          {
            _id: commentId,
            comment: action.payload.comment,
            sender: localStorage.getItem('KANABAN_TOKEN'),
            date: time,
          },
        ],
      };
    case types.REMOVE_COMMENT_CARD:
      if (state.cardId !== action.payload.cardId) {
        return state;
      }

      return {
        ...state,
        comments: [...state.comments.filter(remove => remove._id !== action.payload.commentId)],
      };
    default:
      return state;
  }
};

export default card;
