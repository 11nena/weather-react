import React from "react";

import Logo from "./Logo";
import Search from "./Search/Search";
import Cities from "./Cities/Cities";
import WeatherDetails from "./WeatherDetails/WeatherDetails";

import 'bootstrap/dist/css/bootstrap.css';
import "../Navigation/Navigation.css";

export default function Navigation() {
    return (
        <div className="nav-wrapper">
            <Logo />
            <Search />
            <Cities />
            <WeatherDetails />
        </div>
    );
}