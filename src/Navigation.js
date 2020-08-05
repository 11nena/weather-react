import React from "react";


import Search from "./Search";
import Cities from "./Cities";
import WeatherDetails from "./WeatherDetails";

import 'bootstrap/dist/css/bootstrap.css';
import "./Navigation.css";

export default function Navigation() {
    return (
        <div className="nav-wrapper">
            <div className="appLogo">
                <p>HiWeather</p>
            </div>
            <Search />
            <Cities />
            <WeatherDetails />
        </div>
    );
}