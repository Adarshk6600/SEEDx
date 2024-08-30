// src/RangeSelector.jsx
import React, { useState } from 'react';

// Define the specific step values
const steps = [0, 25, 50, 75, 100];

const RangeSelector = () => {
  // Initialize state with the first step value
  const [value, setValue] = useState(steps[0]);

  // Function to snap to the nearest step value
  const snapToNearestStep = (value) => {
    return steps.reduce((prev, curr) =>
      Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
    );
  };

  // Handle input changes
  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(snapToNearestStep(newValue));
  };

  // Inline CSS styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    position: 'relative', // For positioning the custom markers
  };

  const sliderStyle = {
    width: '100%',
    margin: '0px 50px',
    position: 'relative',
    height: '2px'
  };

  const markerStyle = {
    position: 'absolute',
    top: '100%',
    transform: 'translateY(-50%)',
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    backgroundColor: '#ff6347',
    cursor: 'pointer',
  };

  // Generate markers for each step
  const renderMarkers = () => {
    return steps.map((step) => {
      const percentage = (step / 100) * 100;
      return (
        <div
          key={step}
          style={{
            ...markerStyle,
            left: `${percentage}%`,
            backgroundColor: step === value ? '#4682b4' : '#ff6347',
          }}
        />
      );
    });
  };

  return (
    <div style={containerStyle}>
      <div style={sliderStyle}>
        <input
          type="range"
          min="0"
          max="100"
          step="1" // Fine step to handle snapping to predefined values
          value={value}
          onChange={handleChange}
          style={{ width: '100%', position: 'relative' }}
        />
        {renderMarkers()}
      </div>
    </div>
  );
};

export default RangeSelector;
