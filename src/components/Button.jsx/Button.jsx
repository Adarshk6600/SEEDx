import React from 'react';
import './Button.css';

const Button = ({ name, backgroundColor }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor || '#00bd84',
  };

  return (
    <button
      className='left_section_buttons'
      style={buttonStyle}
    >
      {name || 'Button'}
    </button>
  );
};

export default Button;
