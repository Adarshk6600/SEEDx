import React from 'react';
import './Button.css';

const Button = ({ name, onClick, isActive, color, ...props }) => {
  // Determine button color based on whether it's active and its color prop
  const buttonStyle = {
    backgroundColor: isActive ? color : '#2a2a2a', // Active color, otherwise transparent
    border: isActive ? 'none' : 'none', // Add border for inactive buttons
  };

  return (
    <button
      className='left_section_buttons'
      style={buttonStyle}
      onClick={onClick}
      {...props}
    >
      {name || 'Button'}
    </button>
  );
};

export default Button;
