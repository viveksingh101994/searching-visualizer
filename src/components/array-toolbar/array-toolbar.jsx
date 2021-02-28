import React from 'react';
import SliderToolBarComponent from '../slider-toolbar/slider-toolbar';
import { connect } from 'react-redux';

const ArrayToolBarComponent = () => {
  return (
    <div className="grid grid-cols-2">
      <SliderToolBarComponent
        sliderName="Change Array Size"
        max="100"
        min="10"
      />
      <SliderToolBarComponent sliderName="Speed" max="3" min="1" />
    </div>
  );
};

export default connect(null, null)(ArrayToolBarComponent);
