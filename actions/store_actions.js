import axios from "axios";
import qs from "qs";
import { API_KEY } from 'react-native-dotenv';

import { FETCH_STORES } from "./types";

const STORE_ROOT_URL = "https://api.yelp.com/v3/businesses/search?";

const buildStoresUrl = region => {
  const latitude = region.latitude;
  const longitude = region.longitude;
  const query = qs.stringify({ latitude, longitude });
  return `${STORE_ROOT_URL}${query}`;
};

export const fetchStores = region => async dispatch => {
  try {
    const url = buildStoresUrl(region);
    console.log(API_KEY);
    let { data } = await axios.get(
      url,
      {headers: {
        "Authorization": `Bearer ${API_KEY}`
      }});
    console.log(data);
    dispatch({ type: FETCH_STORES, payload: data });
  } catch (e) {
    console.error(e);
  }
};
