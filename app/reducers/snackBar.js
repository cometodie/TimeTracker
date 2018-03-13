import { SET_SNACKBAR } from 'constants/utilities';

const snackBar = (state = '', action) => {
  if (action.type === SET_SNACKBAR) {
    let newState = Object.assign({}, state);
    newState = action.payload;
    return newState;
  }
  return state;
};

export default snackBar;
