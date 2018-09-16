import { UPDATE_NOTE_FORM, SAVE_NOTE, EDIT_NOTE, DELETE_NOTE } from "./types";

export const updateNoteForm = ({ prop, value }) => {
  return {
    type: UPDATE_NOTE_FORM,
    payload: { prop, value }
  };
};

export const saveNote = ({ storeId, noteForm }) => {
  const noteId = `${storeId}_${noteForm.drinkName}`;

  return {
    type: SAVE_NOTE,
    payload: { storeId, noteForm, noteId }
  };
};

export const editNote = ({ noteId, noteForm }) => {
  return {
    type: EDIT_NOTE,
    payload: { noteId, noteForm }
  };
};

export const deleteNote = noteId => {
  return {
    type: DELETE_NOTE,
    payload: noteId
  };
};
