import React from 'react';
import WPName from '../atoms/WPName';
import WPBio from '../atoms/WPBio';
import WPAvatar from '../atoms/WPAvatar';
import './WeatherPerson.css';

const WeatherPerson = ({firstname, lastname, bio, avatar, ...props}) => {
    return (
        <div className = "weather-person-container">
            <div className="avatar"><WPAvatar avatar={avatar}/></div>
            <div>
                <WPName firstname={firstname} lastname={lastname}/>
                <WPBio  bio={bio}/>
            </div>
        </div>
    )
}

export default WeatherPerson;