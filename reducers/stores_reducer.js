import { FETCH_STORES, UPDATE_FETCHING_STATE } from "../actions/types";

const INITIAL_STATE = {
  results: [],
  isFetching: false
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_STORES:
      console.log(action.payload);
      return { ...state, results: action.payload };
    case UPDATE_FETCHING_STATE:
      return { ...state, isFetching: action.payload };
    default:
      return state;
  }
}
