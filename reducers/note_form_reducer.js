import { UPDATE_NOTE_FORM } from "../actions/types";

const INITIAL_STATE = {
  drinkName: "",
  teaRating: "",
  bobaRating: "",
  notes: "",
  avgRating: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_NOTE_FORM:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}
