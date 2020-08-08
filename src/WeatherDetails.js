import React from "react";


import "./WeatherDetail.css";

export default function WeatherDetails(props) {
    return (
        <div>
            <h4>Weather Details</h4>
            <div>
                <table>
                    <tr>
                        <td>Humidity: </td>
                        <td className="detail-value">{props.data.humidity}%</td>
                    </tr>
                    <tr>
                        <td>Wind speed: </td>
                        <td className="detail-value">{props.data.wind} km/h</td>
                    </tr>
                    <tr>
                        <td>Clouds: </td>
                        <td className="detail-value">{props.data.clouds}%</td>
                    </tr>
                    <tr>
                        <td>Feels Like: </td>
                        <td className="detail-value">{props.data.feelsLike}°</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}