import axios from "axios";
import qs from "qs";
import { API_KEY } from 'react-native-dotenv';

import { 
  FETCH_STORES,
  UPDATE_FETCHING_STATE
} from "./types";

const STORE_ROOT_URL = "https://api.yelp.com/v3/businesses/search?";

const buildStoresUrl = region => {
  const latitude = region.latitude;
  const longitude = region.longitude;
  const categories = 'bubbletea';
  const query = qs.stringify({ latitude, longitude, categories });
  return `${STORE_ROOT_URL}${query}`;
};

export const updateFetchingState = (isFetching) => {
  return {
    type: UPDATE_FETCHING_STATE,
    payload: isFetching
  };
};

export const fetchStores = region => async dispatch => {
  dispatch({ type: UPDATE_FETCHING_STATE, payload: true });

  try {
    const url = buildStoresUrl(region);
    let { data } = await axios.get(
      url,
      {headers: {
        "Authorization": `Bearer ${API_KEY}`
      }});
    dispatch({ type: FETCH_STORES, payload: data.businesses });
    dispatch({ type: UPDATE_FETCHING_STATE, payload: false });
  } catch (e) {
    console.error(e);
  }
};
