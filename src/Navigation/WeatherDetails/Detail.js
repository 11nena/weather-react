import React from "react";

import "./Detail.css";

export default function Details(props) {
    return (
        <div>
            <table>
                <tr>
                    <td>Humidity: </td>
                    <td className="detail-value">15%</td>
                </tr>
                <tr>
                    <td>Wind speed: </td>
                    <td className="detail-value">1.5 km/h</td>
                </tr>
                <tr>
                    <td>Clouds: </td>
                    <td className="detail-value">30%</td>
                </tr>
                <tr>
                    <td>Rain: </td>
                    <td className="detail-value">20%</td>
                </tr>
            </table>
        </div>
    );
}