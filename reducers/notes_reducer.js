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
        noteArray: addToNoteArray(state, noteId)
      };
    default:
      return state;
  }
}

function addToNoteArray(state, noteId) {
  const { noteArray } = state;
  console.log(noteId);

  if (!noteArray.includes(noteId)) {
    return [...noteArray, noteId];
  }

  return noteArray;
}
