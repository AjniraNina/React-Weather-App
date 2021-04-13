import React from 'react';
import './TextLink.css';

const TextLink = ({ onButtonClick, linkType, ...props }) => {
    return (
        <div className={`TextLink ${linkType}`} onClick={onButtonClick}>{props.children}</div>
    );
  };

export default TextLink;