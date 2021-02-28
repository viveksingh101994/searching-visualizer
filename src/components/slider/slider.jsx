import React from 'react';

const SliderComponent = ({ min, max, value }) => {
  return (
    <p className="range-field">
      <input type="range" min={min} step="1" max={max} />
    </p>
  );
};

export default SliderComponent;
