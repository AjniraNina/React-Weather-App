import React from 'react';
import './Label.css';

const Label = props => {
  return <label className="Label">{props.children}</label>;
};

export default Label;