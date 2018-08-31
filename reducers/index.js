import { combineReducers } from "redux";
import stores from "./stores_reducer";
import auth from "./auth_reducer";
import notes from "./notes_reducer";

export default combineReducers({
  stores,
  auth,
  notes
});
