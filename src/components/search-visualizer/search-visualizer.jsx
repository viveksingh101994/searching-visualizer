import React from 'react';
import './search-visualizer.css';
import { connect } from 'react-redux';
import { searchElement } from '../../redux/algorithm-actions/searching-action';

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
  return (
    <div className="chart">
      {items.map(({ num, visited, result }, idx) => {
        const backgroundColor = getBackgroundElement(visited, result);
        return (
          <div
            key={idx}
            className="bar transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            title={num}
            style={{
              height: `${num}px`,
              backgroundColor,
              cursor: 'pointer',
            }}
            onClick={(e) => findElement(e.target.title, items, currentAlgo)}
          >
            {num}
          </div>
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
