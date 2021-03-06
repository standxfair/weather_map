import React from 'react';
import { useSelector } from 'react-redux'
import { convertUnixTime } from '../helpers/dateTime';
import { WEATHER_ICON_URL } from '../constants/api';


const WeatherInfo = () => {
  const point = useSelector(state => state.point)

  if (point.coord) {
    return (
      <div className="info">
        <div className="info__card">
          <h2>{point.name}</h2>
          <div className="info__time">{convertUnixTime(point.dt)}</div>

          <div className="info__weather_icon">
            <img alt={point.weather[0].main} src={WEATHER_ICON_URL + point.weather[0].icon + '@2x.png'} />
            <div className="info__temp">{Math.floor(point.main.temp)}&deg;</div>
          </div>

          <div className="info__weather">Current weather: {point.weather[0].main}</div>
          <div className="info__weather_descr">{point.weather[0].description}</div>
          <div className="info__feel">Real feel: {Math.floor(point.main.feels_like)}&deg;</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default WeatherInfo