import React from 'react';
import './Inputs.css';

const TextInput = ({name, value, onChange, ...props}) => {
  return <input className="Inputs" type="text" name={name} value={value} onChange={onChange} />;
};

export default TextInput;