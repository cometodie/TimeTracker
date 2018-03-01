import { TIME_CLEAR, TIME_SET } from "../../constants/timeTracker";

const INITIAL_STATE = {
  userTime: [{ date: "03-01-2018", time: 8 }]
};

const timeTrackerReducer = (state = INITIAL_STATE, action) => {
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

export default timeTrackerReducer;
