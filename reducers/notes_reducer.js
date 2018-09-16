import _ from "lodash";
import { SAVE_NOTE, EDIT_NOTE, DELETE_NOTE } from "../actions/types";

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
          [noteId]: { ...noteForm, storeId, id: noteId }
        },
        noteArray: addToNoteArray(state, noteId)
      };
    case EDIT_NOTE:
      return {
        ...state,
        noteObjects: {
          ...state.noteObjects,
          [action.payload.noteId]: {
            ...state.noteObjects.noteId,
            ...action.payload.noteForm
          }
        }
      };
    case DELETE_NOTE:
      let noteObjects = { ...state.noteObjects };
      delete noteObjects[action.payload];
      let noteArray = [...state.noteArray];
      _.remove(noteArray, n => {
        return n == action.payload;
      });
      return {
        noteObjects,
        noteArray
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
