import { TIME_SET, TIME_CLEAR } from '../../constants/timeTracker'

export const clearTimeStore = () => {
  return {
    type: TIME_CLEAR
  };
};

export const setTime = payload => {
  return {
    type: TIME_SET,
    payload: payload
  };
};
