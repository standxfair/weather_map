import { GET_WEATHER_URL } from '../constants/api'

export const getWeatherRequest = (lat, lon) => () => {
  return fetch(GET_WEATHER_URL + `&lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
}