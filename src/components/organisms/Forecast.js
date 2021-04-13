import React, { Fragment, useState } from 'react';
import DailyWeather from '../molecules/DailyWeather';
import { chunkify } from '../../utils';
import PropTypes from 'prop-types';

const Forecast = ({ forecast, ...props }) => {
    // Take forecast and split into equal chunks for each day.
    const chunkedForecast = chunkify(forecast, forecast.length / 5);
  
    // Get highest temp from forecast chunk
    const getMaxTemp = array =>
      array.reduce((acc, cur) => (acc.main.temp > cur.main.temp ? acc : cur));
    // Get lowest temp from forecast chunk
    const getMinTemp = array =>
      array.reduce((acc, cur) => (acc.main.temp < cur.main.temp ? acc : cur));

    const [showHourly, setShowHourly] = useState(0);
  
    return (
      <div class="Forecast">
        {chunkedForecast.map((day, i) => (
          <Fragment key={i}>
            {i === 0 && <h2>Today:</h2>}
            {i === 1 && <h2>Upcoming:</h2>}
            <DailyWeather
              key={day[0].dt}
              day={day[0].dt_txt}
              icon={day[0].weather[0].icon}
              maxTemp={`${parseInt(getMaxTemp(day).main.temp)}`}
              minTemp={`${parseInt(getMinTemp(day).main.temp)}`}
              list={day}
              onDailyClick={() => setShowHourly(i)}
              showHourly={showHourly === i}
            />
          </Fragment>
        ))}
      </div>
    );
  };

Forecast.propTypes = {
  forecast:PropTypes.arrayOf(PropTypes.shape({
    dt: PropTypes.number.isRequired,
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired,
    }).isRequired,
    weather: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired

 } 

export default Forecast;
