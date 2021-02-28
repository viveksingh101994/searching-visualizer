import React from 'react';
import SliderToolBarComponent from '../slider-toolbar/slider-toolbar';
import { connect } from 'react-redux';
import {
  setArrayLength,
  setOperationSpeed,
} from '../../redux/array/array-actions';
import { setItem } from '../../redux/algorithm-selector-reducer/algorithm-selector-actions';
import { getElementsAsPerAlgorithm } from '../../utils/utility';

const ArrayToolBarComponent = ({
  dispatchArrayLength,
  dispatchOperationSpeed,
  currentAlgo,
  operationSpeed,
  arrayLength,
}) => {
  return (
    <div className="grid grid-cols-2">
      <SliderToolBarComponent
        sliderName="Change Array Size"
        max="30"
        min="10"
        step="1"
        value={arrayLength}
        onChange={(e) => dispatchArrayLength(currentAlgo, e.target.value)}
      />
      <SliderToolBarComponent
        sliderName="Speed"
        max="-1"
        min="-3"
        step="1"
        value={operationSpeed}
        onChange={(e) => dispatchOperationSpeed(e.target.value)}
      />
    </div>
  );
};

const mapDispatchToProps = () => (dispatch) => ({
  dispatchArrayLength: (currentAlgo, value) => {
    dispatch(
      setItem(getElementsAsPerAlgorithm(currentAlgo, value), currentAlgo)
    );

    dispatch(setArrayLength(currentAlgo, parseInt(value)));
  },

  dispatchOperationSpeed: (value) =>
    dispatch(setOperationSpeed(parseInt(value))),
});

const mapStateToProp = ({
  algorithm: { currentAlgo },
  operation: { arrayLength, operationSpeed },
}) => {
  return {
    currentAlgo,
    arrayLength,
    operationSpeed,
  };
};
export default connect(
  mapStateToProp,
  mapDispatchToProps
)(ArrayToolBarComponent);
