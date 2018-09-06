import { REHYDRATE } from "redux-persist";
import { SAVE_NOTE, CREATE_NOTE } from "../actions/types";

//
const INITIAL_STATE = {
  noteObjects: {}, // stores note details; key: store ID + drink name (note ID)
  noteArray: [] // stores IDs of all the notes;  for displaying purpose
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_NOTE:
      const { storeId, noteForm, noteId } = action.payload;
      return {
        noteObjects: {
          ...state.noteObjects,
          [noteId]: { ...noteForm, storeId }
        },
        noteArray: [...state.noteArray, noteId]
      };
    default:
      return state;
  }
}
