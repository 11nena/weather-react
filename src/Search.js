import React, { useState } from "react";


import "./Search.css";

export default function Search(props) {

    return (
        <div>
            <form onSubmit={props.handleForm}>
                <input type="search" className="search-input" autofocus="on" onChange={props.handleInput} placeholder="City" />
                <input type="submit" className="buttonSubmit" value="🔍" placeholder="&#61447;" />
            </form>
        </div>
    );
}
