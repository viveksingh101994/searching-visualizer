import React from 'react';
import SliderComponent from '../slider/slider';

const SliderToolBarComponent = ({ max, min, sliderName }) => {
  return (
    <div className="grid-rows-2">
      <div>{sliderName}</div>
      <div>
        <SliderComponent max={max} min={min} />
      </div>
    </div>
  );
};

export default SliderToolBarComponent;
