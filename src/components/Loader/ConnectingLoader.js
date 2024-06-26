import React from "react";
import "./ConnectingLoader.css";

const ConnectingLoader = () => {
    return (
        <>
            <div className='loader-container'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <svg id="loaderSVG" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default ConnectingLoader;