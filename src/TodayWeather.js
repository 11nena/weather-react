import React from "react";


import BalonImage from "./BalonImage";
//import ReactAnimatedWeather from 'react-animated-weather';
import FriendlyDate from "./FriendlyDate";

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
            <div className="row units">
                <h3 className="today-heading">today</h3>
                <button className="celsius-btn">°C</button>
                <button>°F</button>
            </div>
            <BalonImage />
            <div className="row today-weather">
                <div className="col-3 temperature">
                    <h1>{Math.round(props.data.temperature)}°</h1>
                </div>
                <div className="col-4">
                    <h2>{props.data.cityName}</h2>
                    <FriendlyDate className="weather-date" date={props.data.date} />
                </div>
                <div className="col-5">
                    <img src={props.data.iconUrl}
                        alt={props.data.description}
                    />
                    <p>{props.data.description}</p>
                </div>
            </div>
        </div>
    );
}