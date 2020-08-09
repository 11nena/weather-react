import React from "react";


import BalonImage from "./BalonImage";
import WeatherTemperature from "./WeatherTemperature";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

import 'bootstrap/dist/css/bootstrap.css';
import "./TodayWeather.css";

export default function TodayWeather(props) {
    /*const [ready, setReady] = useState(false);
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
    }*/
    return (
        <div className="card-body">
            <div className="row">
                <h3 className="today-heading">today</h3>
                <button className="current">📍</button>
            </div>
            <BalonImage />
            <div className="row today-weather">
                <WeatherTemperature celsius={props.data.temperature} />

                <div className="col-4">
                    <h2>{props.data.cityName}</h2>
                    <FriendlyDate className="weather-date" date={props.data.date} />
                </div>
                <div className="col-4">
                    <WeatherIcon code={props.data.icon} />
                    <p>{props.data.description}</p>
                </div>
            </div>
        </div>
    );
}