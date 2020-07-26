import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

import "./Forecast.css";

export default function Forecast() {
    return (
        <div>
            <h3 className="forecast-heading">forecast</h3>
            <div className="row">
                <div className="col-2 weather-forecast">
                    <strong>time</strong>
                    <p>
                        <ReactAnimatedWeather
                            icon={"CLEAR_DAY"}
                            color={"goldenrod"}
                            size={30}
                            animate={true} />
                    </p>
                    <p>
                        <strong>20°</strong>19°
          </p>
                </div>
                <div className="col-2 weather-forecast">
                    <strong>time</strong>
                    <p>
                        <ReactAnimatedWeather
                            icon={"PARTLY_CLOUDY_DAY"}
                            color={"gray"}
                            size={30}
                            animate={true} />
                    </p>
                    <p>
                        <strong>20°</strong>19°
          </p>
                </div>
                <div className="col-2 weather-forecast">
                    <strong>time</strong>
                    <p>
                        <ReactAnimatedWeather
                            icon={"CLEAR_DAY"}
                            color={"goldenrod"}
                            size={30}
                            animate={true} />
                    </p>
                    <p>
                        <strong>20°</strong>19°
          </p>
                </div>
                <div className="col-2 weather-forecast">
                    <p><strong>time</strong></p>
                    <p>
                        <ReactAnimatedWeather
                            icon={"CLEAR_DAY"}
                            color={"goldenrod"}
                            size={30}
                            animate={true} />
                    </p>
                    <p>
                        <strong>20°</strong>19°
          </p>
                </div>
                <div className="col-2 weather-forecast">
                    <p><strong>time</strong></p>
                    <p>
                        <ReactAnimatedWeather
                            icon={"CLOUDY"}
                            color={"gray"}
                            size={30}
                            animate={true} />
                    </p>
                    <p>
                        <strong>20°</strong>19°
                    </p>
                </div>
            </div>
        </div>
    );
}