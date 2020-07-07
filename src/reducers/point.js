import update from 'immutability-helper';
import { SET_POINT_DATA } from '../constants/point';

const initialState = update({}, { $merge: {} });

const point = (state = initialState, action) => {
  switch (action.type) {
    case SET_POINT_DATA:
      let data = { ...action.payload }

      let coords = []
      coords.push(data.coord.lat)
      coords.push(data.coord.lon)
      data.coord = coords

      return update(state, { $set: data })

    default:
      break

  }
  return state;
}

export default point