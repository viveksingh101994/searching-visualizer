import React from 'react';

const SliderComponent = ({ min, max, value, onChange }) => {
  return (
    <p className="range-field">
      <input
        type="range"
        min={min}
        step="1"
        max={max}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </p>
  );
};

export default SliderComponent;
