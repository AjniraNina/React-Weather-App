import React from 'react';
import WeatherIcon from '../atoms/WeatherIcon';
import './HourlyWeatherItem.css';

const HourlyWeatherItem = ({icon, maxTemp, time, ...props}) => {
    return (
        <>
        <ul>
           <li>
           <div class="hourlytime">{time}</div>
           <div class="hourlyicon"><WeatherIcon icon={icon}/></div>
           <div class="hourlytemp">{maxTemp}<sup>º</sup></div>
           </li>
        </ul>
        </>
    )
}

export default HourlyWeatherItem;