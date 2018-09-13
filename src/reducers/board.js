import uuidv4 from 'uuid/v4';
import moment from 'moment';

export const ADD_LIST = 'ADD_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const EDIT_LIST_TITLE = 'EDIT_LIST_TITLE';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const EDIT_CARD_TITLE = 'EDIT_CARD_TITLE';
export const EDIT_DESCRIPTION_CARD = 'EDIT_DESCRIPTION_CARD';
export const ADD_COMMENT_CARD = 'ADD_COMMENT_CARD';
export const REMOVE_COMMENT_CARD = 'REMOVE_COMMENT_CARD';

const initialState = [
  {
    nameList: 'TODO',
    _id: '0',
    cards: [
      {
        cardId: '0',
        cardName: 'Text',
        comments: [
          {
            _id: '1',
            comment: '1234',
            sender: 'Vlad',
            date: '23.09.2018',
          },
        ],
        description: '',
      },
    ],
  },
  {
    nameList: 'In Progress',
    _id: '1',
    cards: [],
  },
  {
    nameList: 'Testing',
    _id: '2',
    cards: [],
  },
];

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

const byIdsMap = {
  [ADD_LIST]: (state, action) => (
    [
      ...state,
      {
        _id: action.payload.listId,
        nameList: action.payload.name,
        cards: [],
      },
    ]
  ),
  [EDIT_LIST_TITLE]: (state, action) => ([
    ...state.map(list => {
      if (list._id !== action.payload.listId) {
        return list;
      }
      return {
        ...list,
        nameList: action.payload.title,
      };
    }),
  ]),
  [ADD_CARD]: (state, action) => ([
    ...state.map(list => {
      if (list._id !== action.payload.listId) {
        return list;
      }

      return {
        ...list,
        cards: [
          ...list.cards,
          {
            cardId: action.payload.cardId,
            cardName: action.payload.cardName,
            description: '',
            comments: [],
          },
        ],
      };
    }),
  ]),
  [REMOVE_CARD]: (state, action) => ([
    ...state.map(list => {
      if (list._id !== action.payload.listId) {
        return list;
      }

      return {
        ...list,
        cards: [
          ...list.cards.filter(removeIt => removeIt.cardId !== action.payload.cardId),
        ],
      };
    }),
  ]),
  [EDIT_DESCRIPTION_CARD]: (state, action) => ([
    ...state.map(list => {
      if (list._id !== action.payload.listId) {
        return list;
      }

      return {
        ...list,
        cards: [
          ...list.cards.map(item => {
            if (item.cardId !== action.payload.cardId) {
              return item;
            }

            return {
              ...item,
              description: action.payload.description,
            };
          }),
        ],
      };
    }),
  ]),
  [ADD_COMMENT_CARD]: (state, action) => ([
    ...state.map(list => {
      if (list._id !== action.payload.listId) {
        return list;
      }

      return {
        ...list,
        cards: [
          ...list.cards.map(item => {
            if (item.cardId !== action.payload.cardId) {
              return item;
            }

            return {
              ...item,
              comments: [
                ...item.comments,
                {
                  _id: uuidv4(),
                  comment: action.payload.comment,
                  sender: localStorage.getItem('KANABAN_TOKEN'),
                  date: moment().format('MMMM Do YYYY'),
                },
              ],
            };
          }),
        ],
      };
    }),
  ]),
  [REMOVE_COMMENT_CARD]: (state, action) => ([
    ...state.map(list => {
      if (list._id !== action.payload.listId) {
        return list;
      }

      return {
        ...list,
        cards: [
          ...list.cards.map(item => {
            if (item.cardId !== action.payload.cardId) {
              return item;
            }

            return {
              ...item,
              comments: [
                ...item.comments.filter(comment => comment._id !== action.payload.commentId),
              ],
            };
          }),
        ],
      };
    }),
  ]),
};

export default function byIds(state = initialState, action) {
  const reduceFn = byIdsMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
