import { UPDATE_NOTE_FORM, SAVE_NOTE } from "./types";

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
