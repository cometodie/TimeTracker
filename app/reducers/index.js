import { combineReducers } from "redux";

import notes from "./notes";
import loading from "./loader";
import sidebar from "./sidebar";

export default combineReducers({
  loading,
  sidebar,
  notes
});
