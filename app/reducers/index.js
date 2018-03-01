import loading from "./loader";
import sidebar from "./sidebar";
import snackBar from "./snackBar";
import timeTrackerReducer from "./timeTracker";
import sessionReducer from "./session";

import { combineReducers } from "redux";

export default combineReducers({
  loading,
  sidebar,
  snackBar,
  sessionState: sessionReducer,
  timeTrackerState: timeTrackerReducer
});
