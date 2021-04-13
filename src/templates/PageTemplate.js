import React from 'react';
import CurrentWeather from '../molecules/CurrentWeather';

const PageTemplate = ({city, cityimage, temp, changeCity, ...props}) => {
  return (
    <div className="PageTemplate">
      <CurrentWeather 
      city = {city}
      cityimage = {cityimage} 
      temp = {temp}
      changeCityLink = {changeCity}
      />
      {props.children}
    </div>
  );
};

export default PageTemplate;