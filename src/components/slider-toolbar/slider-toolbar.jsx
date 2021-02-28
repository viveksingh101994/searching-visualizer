import React from 'react';
import SliderComponent from '../slider/slider';

const SliderToolBarComponent = ({ max, min, sliderName, onChange, value }) => {
  return (
    <div className="grid-rows-2">
      <div>{sliderName}</div>
      <div>
        <SliderComponent
          max={max}
          min={min}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default SliderToolBarComponent;
