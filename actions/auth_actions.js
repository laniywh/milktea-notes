import { AsyncStorage } from "react-native"; // similar to local storage
import { Google, Facebook } from "expo";

import {
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from "./types";
import {
  GOOGLE_IOS_CLIENT_ID,
  GOOGLE_ANDROID_CLIENT_ID
} from "react-native-dotenv";

// Home to use Async Storage:
// AsyncStorage.setItems('fb_token', token);
// AsyncStorage.getItem('fb_token');

// export const googleLogin = () => async dispatch => {
//   console.log("in googleLogin...");

//   let token = await AsyncStorage.getItem("g_token");
//   console.log("done checking token");

//   if (token) {
//     // dispatch an action saying google login is done
//     console.log(token);
//     dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: token });
//   } else {
//     // start up google login process
//     doGoogleLogin(dispatch);
//   }
// };

// for some reason, google login doesn't work.
// after login in, the app reloads and not logged in.
export const googleLogin = () => dispatch => {
  console.log("in googlelogin...");
  AsyncStorage.getItem("g_token").then(token => {
    console.log("in callback");
    if (token) {
      // dispatch an action saying google login is done
      console.log(token);
      dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: token });
    } else {
      // start up google login process
      doGoogleLogin(dispatch);
    }
  });
};

const doGoogleLogin = async dispatch => {
  console.log("logging in...");
  try {
    const { type, accessToken } = await Google.logInAsync({
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
      scopes: ["profile", "email"]
    });

    if (type === "success") {
      console.log(accessToken);
      await AsyncStorage.setItem("g_token", accessToken);
      dispatch({ type: GOOGLE_LOGIN_SUCCESS, payload: accessToken });
    } else {
      console.log("fail");
      dispatch({ type: GOOGLE_LOGIN_FAIL });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: GOOGLE_LOGIN_FAIL });
  }

  console.log("done");
};

export const facebookLogin = () => async dispatch => {
  console.log("check if logged in...");
  let token = await AsyncStorage.getItem("fb_token");

  if (token) {
    console.log("logged in!");
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    // Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async dispatch => {
  console.log("doing facebook login...");
  const { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "255752211813653",
    { permissions: ["public_profile"] }
  );

  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
