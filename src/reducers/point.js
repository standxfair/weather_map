import update from 'immutability-helper';
import { SET_POINT_DATA } from '../constants/point';

const initialState = update({}, { $merge: {} });

const point = (state = initialState, action) => {
  switch (action.type) {
    case SET_POINT_DATA:
      return update(state, { $set: action.payload })

    default:
      break

  }
  return state;
}

export default point