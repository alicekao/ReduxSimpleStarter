import { FETCH_WEATHER } from '../actions/index';

// Reducers are always function that takes state and an action
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // ES6 same as state.concat([action.payload.data])
      // Be sure to return an entirely new state
      return [ action.payload.data, ...state];
  }
  return state;
}
