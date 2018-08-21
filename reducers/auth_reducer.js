const INITIAL_STATE = { token: "" };
import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAIL } from "./types";

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case GOOGLE_LOGIN_FAIL:
      return state;
    default:
      return state;
  }
}
