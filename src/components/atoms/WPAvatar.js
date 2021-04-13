import React from 'react';
import PropTypes from 'prop-types';
import './WPAvatar.css';
import Avatar from './avatar.jpg';


const WPAvatar = ({avatar, ...props}) => {
    return (
        <div className="image-cropper">
        <img src={Avatar} className="profile" alt="weather person profile"/>
        </div>
    )
}

WPAvatar.propTypes = {
    image: PropTypes.string.isRequired
};

export default WPAvatar;