import { SAVE_NOTE, CREATE_NOTE } from "../actions/types";

// contains note objects, which include name, ratings, notes
const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_NOTE:
      const { store, drinkName } = action.payload;
      return { ...state, [`${store}_${drinkName}`]: action.payload };
    default:
      return state;
  }
}
