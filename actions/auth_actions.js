import { AsyncStorage } from "react-native"; // similar to local storage
import { Google } from "expo";

import { GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_FAIL } from "./types";
import {
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_ANDROID_CLIENT_ID
} from "react-native-dotenv";

// Home to use Async Storage:
// AsyncStorage.setItems('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const googleLogin = () => async dispatch => {
  console.log("in googleLogin...");

  let token = await AsyncStorage.getItem("g_token");
  console.log("done checking token");

  if (token) {
    // dispatch an action saying google login is done
    console.log(token);
    dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: token });
  } else {
    // start up google login process
    doGoogleLogin(dispatch);
  }
};

const doGoogleLoin = async dispatch => {
  console.log("logging in...");
  try {
    const { type, accessToken } = await Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ["profile", "email"]
    });

    if (type === "success") {
      console.log(result);
      await AsyncStorage.setItem("g_token", accessToken);
      dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: accessToken });
    } else {
      dispatch({ type: GOOGLE_LOGIN_FAIL });
    }
  } catch (e) {
    return { error: true };
  }
};
