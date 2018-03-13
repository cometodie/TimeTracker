import { TOGGLE_SIDEBAR } from 'constants/utilities';

const sidebar = (state = false, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    let newState = Object.assign({}, state);
    action.payload = !state;
    newState = action.payload;
    return newState;
  }
  return state;
};

export default sidebar;
