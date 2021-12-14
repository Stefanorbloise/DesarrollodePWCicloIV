import React from 'react';

const Input = ({ label, name, defaultValue, type, required, disabled, hidden }) => {
  return (
    <label htmlFor={name} hidden={hidden}  className='flex flex-col my-3'>
      <span>{label}</span>
      <input
        required={required}
        type={type}
        name={name}
        className='input'
        disabled={disabled} 
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Input;