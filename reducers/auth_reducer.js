const INITIAL_STATE = { token: "" };
import {
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from "../actions/types";

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      return { token: action.payload };
    case GOOGLE_LOGIN_FAIL:
      return { token: null };
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    default:
      return state;
  }
}
