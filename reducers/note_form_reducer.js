import { UPDATE_NOTE_FORM, CLEAR_FORM } from "../actions/types";

const INITIAL_STATE = {
  drinkName: "",
  teaRating: 0,
  bobaRating: 0,
  notes: "",
  avgRating: 0
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_NOTE_FORM:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
}
