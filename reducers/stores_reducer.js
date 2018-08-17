import { FETCH_STORES } from "../actions/types";

const INITIAL_STATE = {
  results: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_STORES:
      return state;
    default:
      return state;
  }
}
