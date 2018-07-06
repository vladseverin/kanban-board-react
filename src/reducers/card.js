import * as types from '../constants';

let commentId = 0;

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
    case types.ADD_COMMENT_CARD:
      if (state.cardId !== action.payload.cardId) {
        return state;
      }

      let date = new Date();
      let time = date.getFullYear() + "-" +
        ('0' + (date.getMonth() + 1)).slice(-2) + "-" +
        ('0' + date.getDate()).slice(-2) + " " +
        ('0' + date.getHours()).slice(-2) + ":" +
        ('0' + date.getMinutes()).slice(-2) + ":" +
        ('0' + date.getSeconds()).slice(-2);
      commentId++;

      return {
        ...state,
        comments: [
          ...state.comments,
          { 
            _id: commentId,
            comment: action.payload.comment,
            sender: localStorage.getItem("KANABAN_TOKEN"),
            date: time,
          }
        ],
      };
    default:
      return state;
  }
}

export default card;
