import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { WEATHER_ICON_URL } from '../constants/api'
import { convertUnixTime } from '../helpers/dateTime';
import { useDispatch, useSelector } from 'react-redux'
import { loadData } from '../actions/pointActions'


const WeatherMap = () => {
  const [mapState] = useState({
    center: [55.75, 37.57],
    zoom: 10,
    type: 'yandex#map',
    controls: ['zoomControl', 'fullscreenControl'],
  })

  const dispatch = useDispatch()

  const pointData = useSelector(state => state.point)
  const pointCoords = useSelector(state => state.point.coord)


  const onMapClickHandler = (ev) => {
    const { _sourceEvent: { originalEvent: { coords } } } = ev

    dispatch(loadData(coords[0], coords[1]))
  }

  const makeBaloonContent = (main, weather, dt) => (
    `<div class="baloon">
      <div class="baloon__time">${convertUnixTime(dt)}</div>
      <div class="baloon__weather">Current weather: ${weather.main}</div>
      <div class="baloon__temp">${main.temp}</div>
      <div class="baloon__weather_icon"><img src="${WEATHER_ICON_URL + weather.icon + '@2x.png'}"></div>
      <div class="baloon__weather_descr">${weather.description}</div>
      <div class="baloon__feel">Real feel: ${main.feels_like}</div>
    </div>`
  )

  return (
    <div className="map_container">
      <YMaps>
        <Map
          defaultState={mapState}
          width='100%'
          height='600px'
          modules={['control.ZoomControl', 'control.FullscreenControl', 'templateLayoutFactory', 'ObjectManager', 'geocode',]}
          onClick={onMapClickHandler}
        >
          {pointCoords
            ? (
              <Placemark
                geometry={pointCoords}
                properties={{
                  balloonContentHeader: '',
                  balloonContentBody: 'Загрузка...',
                }}
                modules={['geoObject.addon.balloon']}
                onClick={async (ev) => {
                  ev.originalEvent.target.properties.set({
                    balloonContentHeader: pointData.name,
                    balloonContentBody: makeBaloonContent(pointData.main, pointData.weather[0], pointData.dt)
                  })
                }}
              />
            )
            : null}
        </Map>
      </YMaps>
    </div>
  )
}

export default WeatherMap;