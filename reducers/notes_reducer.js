import _ from "lodash";
import {
  SAVE_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  CHANGE_SORT_METHOD,
  SORT_NOTES
} from "../actions/types";
import {
  DATE_CREATED_INC,
  DATE_CREATED_DEC,
  DISTANCE,
  TEA_RATING,
  BOBA_RATING,
  AVG_RATING
} from "./sort_methods";

const INITIAL_STATE = {
  noteObjects: {}, // stores note details; key: store ID + drink name (note ID)
  noteArray: [], // stores IDs of all the notes;  for displaying purpose
  currentSortMethod: TEA_RATING
};

export default function(state = INITIAL_STATE, action) {
  let newNoteArray = [];
  switch (action.type) {
    case SAVE_NOTE:
      const { storeId, noteForm, noteId } = action.payload;
      return {
        ...state,
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
        ...state,
        noteObjects,
        noteArray
      };

      // sort notes after changing sort method
    case CHANGE_SORT_METHOD:
      const { sortMethod, location } = action.payload;

      // no need to sort if sort method not changed
      if (state.currentSortMethod === sortMethod) {
        newNoteArray = state.noteArray;
      } else {
        // clone note array
        newNoteArray = state.noteArray.slice(0);
        newNoteArray = orderNotes(state, newNoteArray, sortMethod, location);
      }

      return {
        ...state,
        noteArray: newNoteArray,
        currentSortMethod: sortMethod
      };

    // sort notes after creating new note
    case SORT_NOTES:
      // clone note array
      newNoteArray = state.noteArray.slice(0);

      newNoteArray = orderNotes(
        // state.noteArray = orderNotes(
        state,
        state.noteArray,
        state.currentSortMethod,
        action.payload // location
      );
      return {
        ...state,
        noteArray: newNoteArray
      };

    default:
      return state;
  }
}

function orderNotes(state, noteArray, sortMethod, location) {
  // sort note array
  switch (sortMethod) {
    case TEA_RATING:
      sortByTeaRating(state, noteArray);
      return noteArray;

    default:
      return noteArray;
  }
}

function sortByTeaRating(state, noteArray) {
  noteArray.sort((noteId1, noteId2) => {
    const { noteObjects } = state;
    if (noteObjects[noteId1].eaRating > noteObjects[noteId2].teaRating) {
      return -1;
    } else if (
      noteObjects[noteId1].teaRating < noteObjects[noteId2].teaRating
    ) {
      return 1;
    }
    return 0;
  });
}

function addToNoteArray(state, noteId) {
  const { noteArray } = state;
  console.log(noteId);

  if (!noteArray.includes(noteId)) {
    return [...noteArray, noteId];
  }

  return noteArray;
}
