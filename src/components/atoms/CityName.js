import React from 'react';
import './CityName.css';

const CityName = ({city, ...props}) => {
    return (
        <h1 className="CityName">{city}</h1>
    )
}

export default CityName;