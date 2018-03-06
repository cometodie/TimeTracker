import loading from "./loader";
import sidebar from "./sidebar";
import snackBar from "./snackBar";
import * as timeTrackerReducer from "./timeTracker";
import sessionReducer from "./session";

import { combineReducers } from "redux";

export default combineReducers({
  loading,
  sidebar,
  snackBar,
  currentMonth: timeTrackerReducer.monthReducer,
  currentYear: timeTrackerReducer.yearReducer,
  sessionState: sessionReducer,
  timeTrackerState: timeTrackerReducer.timeTrackerReducer
});
