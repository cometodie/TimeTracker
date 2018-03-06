import { TIME_SET, TIME_CLEAR, SET_MONTH, NEXT_YEAR, PREV_YEAR } from "../../constants/timeTracker";

export const clearTimeStore = () => {
  return {
    type: TIME_CLEAR
  };
};

export const setTimeTrackerData = payload => {
  return {
    type: TIME_SET,
    payload: payload
  };
};

export const setMonth = payload => dispatch => {
  if (payload > 12) {
    dispatch({ type: NEXT_YEAR });
    payload = 1;
  } else if (payload <= 0) {
    dispatch({ type: PREV_YEAR });
    payload = 12;
  }
  dispatch({
    type: SET_MONTH,
    payload: payload
  });
};

export const nextYear = () => {
  return {
    type: NEXT_YEAR
  };
};

export const prevYear = () => {
  return {
    type: PREV_YEAR
  };
};

export const setYear = payload => {
  return {
    type: SET_YEAR,
    payload: payload
  };
};
