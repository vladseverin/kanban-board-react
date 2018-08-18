export const loadState = () => {
  try {
    const getState = localStorage.getItem('state');
    if (getState === null) {
      return undefined;
    }
    return JSON.parse(getState);
    // eslint-disable-next-line
  } catch(e) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const toJSON = JSON.stringify(state);
    localStorage.setItem('state', toJSON);
    // eslint-disable-next-line
  } catch(e) {
    // eslint-disable-next-line
    //Ignore errors.
  }
};
