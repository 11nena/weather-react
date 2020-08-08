import React, { useState } from 'react';
import axios from "axios";

import Search from "./Search";
import Cities from "./Cities";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import TodayWeather from "./TodayWeather";

import 'bootstrap/dist/css/bootstrap.css';
import "./Navigation.css";
import './App.css';



function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.main.temp,
      cityName: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      clouds: response.data.clouds.all,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      ready: true
    })
  }

  function search() {
    const apiKey = "6cc7179aae3be83895e44fc50c0ec1da";
    //let city = props.defaultCity;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for city
    search();
  }


  function handleCityChange(event) {
    setCity(event.target.value);
    console.log(city)
  }
  if (weatherData.ready) {
    return (
      <div className="container" >
        <div className="row weather-part">
          <div className="col-4.5">
            <div className="nav-wrapper">
              <div className="appLogo">
                <p>HiWeather</p>
              </div>
              <Search handleForm={handleSubmit} handleInput={handleCityChange} />
              <Cities />
              <WeatherDetails data={weatherData} />
            </div>
          </div>
          <div className="col-8">
            <Forecast />
            <TodayWeather data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading ...";
  }
}

export default App;
