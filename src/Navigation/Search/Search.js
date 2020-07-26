import React from "react";


import "./Search.css";

export default function Search() {

    return (
        <div>
            <form>
                <input type="search" placeholder="find city" className="search-input" />
                <input type="submit" className="buttonSubmit" value="🔍" placeholder="&#61447;" />
            </form>
        </div>
    );
}
