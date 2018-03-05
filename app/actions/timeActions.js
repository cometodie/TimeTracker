import { TIME_SET, TIME_CLEAR, SET_MONTH } from '../../constants/timeTracker'

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

export const setMonth = payload => {
  payload = payload > 12 ? 1 : payload;
  payload = payload <= 0 ? 12 : payload;
  return {
    type: SET_MONTH,
    payload: payload
  };
};

