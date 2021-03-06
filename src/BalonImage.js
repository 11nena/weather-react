import React from "react";
//import imageBalonSvg from "./images/baloon.svg";
import "./BalonImage.css";

export default function BalonImage(props) {
    let ballonColor = "imageBalonOrange";
    if (props.data < 10) {
        ballonColor = "imageBalonBlue";
    }
    else if (props.data > 25){
        ballonColor = "imageBalonYellow";
    } else {
        ballonColor="imageBalonOrange";
    }

    return (
        <div className= {ballonColor}>
           <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                width="89px" height="129px" viewBox="0 0 89 129" enable-background="new 0 0 89 129">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.063,53.166C6.21,41.88,9.372,31.539,15.979,22.345
                C32.266-0.321,62.26-0.408,77.598,22.865c14.14,21.456,14.412,42.928-4.958,61.424c-7.052,6.733-15.278,12.262-23.169,18.066
                c-1.203,0.885-3.932,1.018-5.222,0.256C32.398,95.619,21.69,87.205,13.554,75.933C7.905,68.107,6.042,62.08,6.063,53.166z
                M40.376,85.156C26.074,62.282,25.489,38.612,36.18,13.514C23.711,19.681,15.859,36.762,17.745,52.95
                C19.434,67.454,26.211,78.857,40.376,85.156z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.692,127.161c-4.478,0.034-8.359-4.289-8.442-9.401
                c-0.059-3.648,5.22-10.155,8.321-10.256c3.213-0.104,8.177,6.034,8.209,10.149C54.821,123.081,51.38,127.126,46.692,127.161z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#FFFFFF" d="M40.376,85.156C26.211,78.857,19.434,67.454,17.745,52.95
                c-1.886-16.188,5.966-33.27,18.435-39.437C25.489,38.612,26.074,62.282,40.376,85.156z"/>
            </svg>
        </div>
    )
    /*
        return (
            <div className={ballonClass}>
                <object class="baloon" data={imageBalonSvg} type="image/svg+xml"></object>
            </div>)
            */

} 