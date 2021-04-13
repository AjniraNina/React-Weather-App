import React from 'react';
import CityName from '../atoms/CityName';
import TextLink from '../atoms/TextLink';
import CurrentTemperature from '../atoms/CurrentTemperature';
// import RandoBox from '../atoms/RandoBox';
import './CurrentWeather.css';

const CurrentWeather = ({city, temperature, onTextLinkClick, linkType, ...props}) => {
    return (
        <>
            <div class="cityimage" style={{ backgroundImage: `url(/static/${city}.jpg)`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            }}>
                <div class="currentweather">
                    <CityName city={city}/>
                    <TextLink linkType="changecitylink" onButtonClick={onTextLinkClick}>Change</TextLink>
                    <CurrentTemperature temperature={temperature} />
                    {/* <RandoBox /> */}
                    <div class="color-divider"></div>
                </div>
            </div>
        </>
    );
};

export default CurrentWeather;