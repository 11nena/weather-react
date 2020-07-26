import React from "react";
import Citie from "./Citie";

export default function Cities() {
    return (
        <div>
            <h4>Another Location</h4>
            <ul>
                <Citie value="London" />
                <Citie value="New York" />
                <Citie value="Paris" />
                <Citie value="Sidney" />
            </ul>
        </div>
    );
}