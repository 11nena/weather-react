import React, { useState } from "react";
import axios from "axios";


import BalonImage from "../BalonImage/BalonImage";
//import ReactAnimatedWeather from 'react-animated-weather';
import FriendlyDate from "./FriendlyDate";

import 'bootstrap/dist/css/bootstrap.css';
import "./TodayWeather.css";

export default function TodayWeather(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    function handleResponse(response) {
        console.log(response);
        setWeatherData({
            temperature: response.data.main.temp,
            cityName: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: "",
            date: new Date(response.data.dt * 1000)
        })
        setReady(true);
    }

    if (ready) {
        return (
            <div className="card-body">
                <div className="row units">
                    <h3 className="today-heading">today</h3>
                    <button className="celsius-btn">°C</button>
                    <button>°F</button>
                </div>
                <BalonImage />
                <div className="row today-weather">
                    <div className="col-3 temperature">
                        <h1>{Math.round(weatherData.temperature)}°</h1>
                    </div>
                    <div className="col-4">
                        <h2>{weatherData.cityName}</h2>
                        <FriendlyDate className="weather-date" date={weatherData.date} />
                    </div>
                    <div className="col-5">
                        <img src={weatherData.iconUrl}
                            alt={weatherData.description}
                        />
                        <p>{weatherData.description}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "6cc7179aae3be83895e44fc50c0ec1da";
        let city = props.defaultCity;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${apiKey}&units=metric`;

        axios.get(url).then(handleResponse);

        return "Loading ...";
    }
}