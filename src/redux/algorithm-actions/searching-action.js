import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';
import { Algorithms } from '../algorithm-selector-reducer/alogrithm-selector-types';
import { binarySearch } from './binary-search-actions';
import { linearSearch } from './linear-search-actions';

export const searchElement = (array, element, dispatch, type) => {
  let newArray = array.map((item) => ({
    num: item.num,
    visited: false,
    result: false,
  }));
  dispatch(setItem(newArray, type));
  if (type === Algorithms.linearSearch) {
    linearSearch(newArray, element, dispatch);
  } else {
    binarySearch(newArray, element, dispatch);
  }
};
