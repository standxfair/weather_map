import { SET_POINT_DATA, LOAD_POINT_DATA } from '../constants/point';
import { formatCoords } from '../helpers/point';

export const putData = (data) => {
  return {
    type: SET_POINT_DATA,
    payload: formatCoords(data)
  }
}

export const LoadData = (lat, lon) => {
  return {
    type: LOAD_POINT_DATA,
    payload: [lat, lon]
  }
}