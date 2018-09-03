import { SAVE_NOTE } from '../actions/types';

const INITIAL_STATE = {};


export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CREATE_NOTE:
      const { store, drinkName }
      return { ...state, [`${store}_${drinkName}`]: action.payload};
    default:
      return state;
  }
}
