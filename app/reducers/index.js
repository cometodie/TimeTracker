import { combineReducers } from "redux";

import notes from "./notes";
import loading from "./loader";
import sidebar from "./sidebar";
import userReducer from "./user";
import sessionReducer from "./session";

export default combineReducers({
  loading,
  sidebar,
  notes,
  sessionState: sessionReducer,
  userState: userReducer
});
