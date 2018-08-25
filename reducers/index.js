import { combineReducers } from "redux";
import stores from "./stores_reducer";
import auth from "./auth_reducer";

export default combineReducers({
  stores,
  auth
});
