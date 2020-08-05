import React from 'react';
import Navigation from "./Navigation";
import Forecast from "./Forecast";
import TodayWeather from "./TodayWeather";

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
          <TodayWeather defaultCity="Paris" />
        </div>
      </div>
    </div>
  );
}

export default App;
