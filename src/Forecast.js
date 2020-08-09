import React, { useState } from "react";
import axios from "axios";

import WeatherForecastPreview from "./WeatherForecastPreview";
//import ReactAnimatedWeather from 'react-animated-weather';

import "./Forecast.css";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }

    if (loaded && props.city === forecast.city.name) {
        console.log(forecast);
        return <div className="row">
            <WeatherForecastPreview data={forecast.list[0]} />
            <WeatherForecastPreview data={forecast.list[1]} />
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />
            <WeatherForecastPreview data={forecast.list[4]} />
        </div>
    } else {
        const apiKey = "6cc7179aae3be83895e44fc50c0ec1da";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);

        return null;
    }
}