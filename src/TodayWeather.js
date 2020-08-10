import React from "react";


import WeatherTemperature from "./WeatherTemperature";
import FriendlyDate from "./FriendlyDate";
import WeatherIcon from "./WeatherIcon";

import 'bootstrap/dist/css/bootstrap.css';
import "./TodayWeather.css";

export default function TodayWeather(props) {

    return (
        <div className="card-body">
            <div className="row">
                <h3 className="today-heading">today</h3>
            </div>
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