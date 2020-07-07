import React from 'react';
import './App.css';
import WeatherMap from './components/Map'
import WeatherInfo from './components/WeatherInfo';
import History from './components/History';


function App() {
  return (
    <div className="App">
      <WeatherMap />
      <div className="container">
        <WeatherInfo />
        <History />
      </div>
    </div>
  );
}

export default App;
