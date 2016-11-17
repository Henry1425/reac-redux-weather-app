import { FETCH_WEATHER } from '../actions/index';

export default function(state = [],action) {
  switch (action.type) {
    case FETCH_WEATHER:
    return [action.payload.data, ...state]; //es6 creates new array
  }
 return state;
}


{/*//  return state.concat([action.payload.data]);*/}
