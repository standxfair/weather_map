import { SET_POINT_DATA, LOAD_POINT_DATA } from '../constants/point';




export const putData = (data) => {
  return {
    type: SET_POINT_DATA,
    payload: data
  }
}

export const LoadData = (lat, lon) => {
  return {
    type: LOAD_POINT_DATA,
    payload: [lat, lon]
  }
}