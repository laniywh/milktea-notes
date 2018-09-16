import { REHYDRATE } from "redux-persist/es/constants";
import { SAVE_NOTE } from "../actions/types";

// contains an array of note IDs for each store
const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_NOTE:
      return saveNote(state, action.payload);
    default:
      return state;
  }
}

function saveNote(state, payload) {
  const { storeId, noteId } = payload;
  var noteIdArray = [];

  if (state[storeId]) {
    // don't add note ID to state if editing existing note
    if (state[storeId].includes(noteId)) {
      return state;
    }

    // create new array by copying over existing note IDs
    noteIdArray = [...state[storeId]];
  }

  return { ...state, [storeId]: [...noteIdArray, noteId] };
}
