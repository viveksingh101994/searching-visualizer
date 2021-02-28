import React from 'react';
import { connect } from 'react-redux';
import { searchElement } from '../../redux/algorithm-actions/searching-action';
import BarComponent from '../bar/bar';

const getBackgroundElement = (visited, result) => {
  if (visited && result) {
    return '#8bcf0c';
  }
  if (visited) {
    return '#0c9ecf';
  }
  return '#181e54';
};

const SearchVisualizer = ({
  items,
  findElement,
  currentAlgo,
  arrayLength,
  operationSpeed,
}) => {
  const classChart = `grid grid-cols-${arrayLength.length - 1} gap-2`;
  return (
    <div className={classChart}>
      {items.map(({ num, visited, result }, idx) => {
        const backgroundColor = getBackgroundElement(visited, result);
        return (
          <BarComponent
            key={idx}
            title={num}
            height={num}
            backgroundColor={backgroundColor}
            onClick={(e) =>
              findElement(e.target.title, items, currentAlgo, operationSpeed)
            }
          >
            {num}
          </BarComponent>
        );
      })}
    </div>
  );
};

const mapStateToProp = ({
  algorithm: { currentAlgo, items },
  operation: { arrayLength, operationSpeed },
}) => {
  return {
    currentAlgo,
    items,
    arrayLength,
    operationSpeed,
  };
};

const mapDispatchToPros = () => (dispatch) => ({
  findElement: async (element, arr, currentAlgo, operationSpeed) =>
    await searchElement(arr, element, dispatch, currentAlgo, operationSpeed),
});
export default connect(mapStateToProp, mapDispatchToPros)(SearchVisualizer);
