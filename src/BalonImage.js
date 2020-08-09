import React from "react";
import imageBalon from "./images/baloon.png";
import imageBalonBlue from "./images/baloon_blue.png";
import imageBalonYellow from "./images/baloon_yellow.png";

import "./BalonImage.css"

export default function BalonImage(props) {
    if (props.data < 10) {
        return (
            <div className="">
                <img src={imageBalonBlue} alt="baloon" className="balon-img" />
            </div>
        )
    } else if (props.data > 25) {
        return (
            <div className="">
                <img src={imageBalonYellow} alt="baloon" className="balon-img" />
            </div>);
    } else {
        return (
            <div className="">
                <img src={imageBalon} alt="baloon" className="balon-img" />
            </div>
        );
    }
} 