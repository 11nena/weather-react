import React from 'react';
import Navigation from "./Navigation/Navigation";
import Forecast from "./Forecast/Forecast";
import TodayWeather from "./TodayWeather/TodayWeather";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="container" >
      <div className="row weather-part">
        <div className="col-4.5">
          <Navigation />
        </div>
        <div className="col-8">
          <Forecast />
          <TodayWeather defaultCity="London" />
        </div>
      </div>
    </div>
  );
}

export default App;
