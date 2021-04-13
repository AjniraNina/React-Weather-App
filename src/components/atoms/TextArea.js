import React from 'react';
import './Inputs.css';
import './TextArea.css';

const TextArea = ({value, onChange, name, ...props}) => {
  return <textarea className="Inputs TextArea" name={name} value={value} onChange={onChange}/>;
};

export default TextArea;