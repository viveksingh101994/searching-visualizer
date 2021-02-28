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

const SearchVisualizer = ({ items, findElement, currentAlgo }) => {
  const classChart = `grid grid-cols-${items.length - 1} gap-2`;
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
            onClick={(e) => findElement(e.target.title, items, currentAlgo)}
          >
            {num}
          </BarComponent>
        );
      })}
    </div>
  );
};

const mapStateToProp = ({ algorithm: { currentAlgo, items } }) => {
  return {
    currentAlgo,
    items,
  };
};

const mapDispatchToPros = () => (dispatch) => ({
  findElement: async (element, arr, currentAlgo) =>
    await searchElement(arr, element, dispatch, currentAlgo),
});
export default connect(mapStateToProp, mapDispatchToPros)(SearchVisualizer);
