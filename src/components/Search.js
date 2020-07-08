import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { clearPointData } from '../actions/pointActions';
import { loadData } from '../actions/pointActions'

const cityList = require('../constants/city.list.json');

const Search = () => {
  const [city, setCity] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const dispatch = useDispatch()

  const inputHandler = (ev) => {
    const { value } = ev.target
    setCity(value)

    if (value) {
      const val = value
        .replace(/\s/g, '')
        .toLowerCase()

      let res = cityList.filter((item) => {
        const name = item.name
          .replace(/\s/g, '')
          .toLowerCase()

        return name.slice(0, val.length) === val
      })

      if (res.length > 10) {
        res = res.slice(0, 10)
      }

      setSuggestions(res)
    } else {

      setSuggestions([])
    }
  }

  const setCitySuggestion = (item) => () => {
    setCity(item.name)
    setSuggestions([])

    dispatch(clearPointData())
    dispatch(loadData(item.coord.lat, item.coord.lon))
  }

  return (
    <div className="search">
      <div className="search__sugest">
        <input
          className="search__sugest_input"
          placeholder="Enter city"
          value={city}
          onChange={inputHandler}
        />
        {suggestions.length ? (
          <ul className="search__sugest_list">
            {suggestions.map((item, key) => (
              <li
                key={key}
                onClick={setCitySuggestion(item)}
              >
                {item.name}, {item.country}
              </li>
            ))}
          </ul>
        )
          : null}
      </div>
    </div>
  )
}

export default Search