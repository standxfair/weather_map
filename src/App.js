import React from 'react';
import './App.css';
import WeatherMap from './components/Map'
import WeatherInfo from './components/WeatherInfo';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <WeatherMap />
      <WeatherInfo />
    </div>
  );
}

export default App;
