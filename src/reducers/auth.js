const LOGIN = Symbol('auth/LOGIN');
const LOGOUT = Symbol('auth/LOGOUT');

const token = localStorage.getItem('KANABAN_TOKEN');

const initialState = {
  isAuthenticated: !!token,
  username: null,
  token,
};

export const login = username => ({
  type: LOGIN,
  payload: username,
});

export const logout = () => ({
  type: LOGOUT,
});

const actionsMap = {
  [LOGIN]: (state, action) => ({
    ...state,
    isAuthenticated: true,
    username: action.payload,
  }),
  [LOGOUT]: state => ({
    ...state,
    isAuthenticated: false,
    username: null,
    token: '',
  }),
};

function auth(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}

export default auth;
