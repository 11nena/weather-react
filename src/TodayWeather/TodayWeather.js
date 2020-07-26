import React from "react";

import "./TodayWeather.css";
import BalonImage from "../BalonImage/BalonImage";
import ReactAnimatedWeather from 'react-animated-weather';

export default function TodayWeather() {
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
                    <h1>26°</h1>
                </div>
                <div className="col-2">
                    <h2>London</h2>
                    <p>date</p>
                </div>
                <div className="col-5 todays-text">
                    <p className="weather-icon">
                        <ReactAnimatedWeather
                            icon={"CLEAR_DAY"}
                            color={"goldenrod"}
                            size={30}
                            animate={true} />
                    </p>
                    <p>sunny</p>
                </div>
            </div>
        </div>
    );
}