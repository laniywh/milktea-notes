import { UPDATE_NOTE_FORM } from "./types";

export const updateNoteForm = ({ prop, value }) => {
  return {
    type: UPDATE_NOTE_FORM,
    payload: { prop, value }
  };
};
