import React, { useState } from "react";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { IconContext } from "react-icons";



import "./Search.css";

export default function Search(props) {

    return (
        <div>
            <form onSubmit={props.handleForm}>
                <input type="search" className="search-input" autofocus="on" onChange={props.handleInput} placeholder="City" />
                <button type="submit" className="buttonSubmit" >
                    🔍
                </button>
            </form>
        </div>
    );
}
