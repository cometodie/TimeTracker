import { TIME_CLEAR, TIME_SET, SET_MONTH } from "../../constants/timeTracker";

const INITIAL_TIME_STATE = {
  userTime: [{ date: "03-01-2018", time: 8 }]
};

export const timeTrackerReducer = (state = INITIAL_TIME_STATE, action) => {
  switch (action.type) {
    case TIME_SET: {
      return {
        ...state,
        userTime: action.payload
      };
    }
    case TIME_CLEAR: {
      return {
        ...state,
        userTime: []
      };
    }
    default:
      return state;
  }
};

const INITIAL_MONTH_STATE = new Date().getMonth() + 1;

export const monthReducer = (state = INITIAL_MONTH_STATE, action) => {
  switch (action.type) {
    case SET_MONTH: {
      let newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    }
    default:
      return state;
  }
};
