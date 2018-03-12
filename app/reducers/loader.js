const loading = (state = false, action) => {
  if (action.type === 'TOGGLE_LOADING') {
    let newState = Object.assign({}, state);
    newState = action.payload;
    return newState;
  }
  return state;
};

export default loading;
