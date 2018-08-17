import axios from "axios";
import qs from "qs";

import { FETCH_STORES } from "./types";

const STORE_ROOT_URL = "https://api.yelp.com/v3/businesses/search";

const buildStoresUrl = region => {
  const latitude = region.latitude;
  const longitude = region.longitude;
  const query = qs.stringify({ latitude, longitude, region });
  return `${STORE_ROOT_URL}${query}`;
};

export const fetchStores = region => async dispatch => {
  try {
    const url = buildStoresUrl(region);
    let { data } = await axios.get(url);
    console.log(data);
    dispatch({ type: FETCH_STORES, payload: data });
  } catch (e) {
    console.error(e);
  }
};
