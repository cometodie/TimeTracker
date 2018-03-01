import loading from "./loader";
import sidebar from "./sidebar";
import timeTrackerReducer from "./timeTracker";
import sessionReducer from "./session";

import { combineReducers } from "redux";

export default combineReducers({
  loading,
  sidebar,
  sessionState: sessionReducer,
  timeTrackerState: timeTrackerReducer
});
