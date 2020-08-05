import React, { useState } from "react";
import axios from "axios";


import "./Detail.css";

export default function Detail(props) {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function handleResponse(response) {
        setWeatherData({
            wind: response.data.wind.speed,
            clouds: response.data.clouds.all,
            humidity: response.data.main.humidity,
            feelsLike: response.data.main.feels_like
        })
        setReady(true);
    }

    if (ready) {
        return (
            <div>
                <table>
                    <tr>
                        <td>Humidity: </td>
                        <td className="detail-value">{weatherData.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Wind speed: </td>
                        <td className="detail-value">{weatherData.wind} km/h</td>
                    </tr>
                    <tr>
                        <td>Clouds: </td>
                        <td className="detail-value">{weatherData.clouds}%</td>
                    </tr>
                    <tr>
                        <td>Feels Like: </td>
                        <td className="detail-value">{weatherData.feelsLike}°</td>
                    </tr>
                </table>
            </div>
        );
    } else {
        const apiKey = "6cc7179aae3be83895e44fc50c0ec1da";
        let city = props.defaultCity;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        axios.get(url).then(handleResponse);

        return "Loading ...";
    }
}