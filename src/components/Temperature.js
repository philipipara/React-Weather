import React from 'react';

const Temperature = (props) => {
    return (
        <div className="temperature-wrapper">
            <h2 className="temperature">{props.temperature}°{props.unit}</h2>
            <h2 className="forecast">{props.forecast}</h2>
        </div>
    )
};

export default Temperature;