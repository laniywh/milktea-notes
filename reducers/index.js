import { combineReducers } from "redux";
import stores from "./stores_reducer";
import auth from "./auth_reducer";
import notes from "./notes_reducer";
import noteForm from "./note_form_reducer";
import storeNotes from "./store_notes_reducer";
import favNotes from "./fav_notes_reducer";

export default combineReducers({
  stores,
  auth,
  notes,
  storeNotes,
  favNotes,
  noteForm
});
