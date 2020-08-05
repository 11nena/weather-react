import React, { useState } from "react";


import "./Search.css";

export default function Search(props) {
    let [city, setCity] = useState(props.defaulCity);

    function handleSubmit(event) {
        event.preventDefault();
        //search for city
    }

    function handleCityChange(event) {
        setCity(event.target.value);
        alert(city);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="find city" className="search-input" onChange={handleCityChange} />
                <input type="submit" className="buttonSubmit" value="🔍" placeholder="&#61447;" />
            </form>
        </div>
    );
}
