import React from "react";

import "./Citie.css";

export default function Citie(props) {
    return (
        <div>
            <li>
                <a href="/">{props.value}</a>
            </li>
        </div>
    );
}