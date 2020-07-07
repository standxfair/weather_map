import React, { useState } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { GET_WEATHER_URL, WEATHER_ICON_URL } from '../constants/api'
import { convertUnixTime } from '../helpers/dateTime';

const WeatherMap = () => {
  const [mapState, setMapState] = useState({
    center: [55.75, 37.57],
    zoom: 10,
    type: 'yandex#map',
    controls: ['zoomControl', 'fullscreenControl'],
  })
  const [pointCoords, setPointCoords] = useState(null)

  const onMapClickHandler = (ev) => {
    const { _sourceEvent: { originalEvent: { coords } } } = ev
    setPointCoords(coords)
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
          height='700px'
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
                  await fetch(GET_WEATHER_URL + `&lat=${pointCoords[0]}&lon=${pointCoords[1]}`)
                    .then((response) => response.json())
                    .then(result => {
                      console.log(result)
                      ev.originalEvent.target.properties.set({
                        balloonContentHeader: result.name,
                        balloonContentBody: makeBaloonContent(result.main, result.weather[0], result.dt)
                      })
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