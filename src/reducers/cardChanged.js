// import * as types from '../constants';
// eslint-disable-next-line
import { 
  ADD_CARD,
  REMOVE_CARD,
  EDIT_DESCRIPTION_CARD,
  ADD_COMMENT_CARD,
  REMOVE_COMMENT_CARD,
} from './board';

let commentId = 0;

const cardMap = {
  [ADD_CARD]: (state, action) => ({
    cardId: action.payload.cardId,
    cardName: action.payload.cardName,
    description: '',
    comments: [],
  }),
  [REMOVE_CARD]: (state, action) => (
    state.cardId !== action.payload.cardId
  ),
  [EDIT_DESCRIPTION_CARD]: (state, action) => {
    if (state.cardId !== action.payload.cardId) {
      return state;
    }

    return {
      ...state,
      description: action.payload.description,
    };
  },
  [ADD_COMMENT_CARD]: (state, action) => {
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
  },
  [REMOVE_COMMENT_CARD]: (state, action) => {
    if (state.cardId !== action.payload.cardId) {
      return state;
    }
    return {
      ...state,
      comments: [...state.comments.filter(remove => remove._id !== action.payload.commentId)],
    };
  },
};

function card(state, action) {
  const reduceFn = cardMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}

export default card;
