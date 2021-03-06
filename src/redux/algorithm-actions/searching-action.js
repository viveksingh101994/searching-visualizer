import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';
import { Algorithms } from '../algorithm-selector-reducer/algorithm-selector-types';
import { binarySearch } from './binary-search-actions';
import { jumpSearch } from './jump-search-actions';
import { linearSearch } from './linear-search-actions';
import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { interpolationSearch } from './interpolation-search.action';
import { exponentialSearch } from './exponenital-search-action';
import { fibonacciSearch } from './fibonacci-search-actions';
export const searchElement = (
  array,
  element,
  dispatch,
  type,
  operationSpeed
) => {
  let newArray = array.map((item) => ({
    num: item.num,
    visited: false,
    result: false,
  }));
  dispatch(setItem(newArray, type));
  if (type === ALGORITHMS_CONSTANTS.linearSearch) {
    linearSearch(newArray, element, dispatch, operationSpeed);
  } else if (type === ALGORITHMS_CONSTANTS.binarySearch) {
    binarySearch(newArray, element, dispatch, operationSpeed);
  } else if (type === ALGORITHMS_CONSTANTS.jumpSearch) {
    jumpSearch(newArray, element, dispatch, operationSpeed);
  } else if (type === ALGORITHMS_CONSTANTS.interpolationSearch) {
    interpolationSearch(newArray, element, dispatch, operationSpeed);
  } else if (type === ALGORITHMS_CONSTANTS.exponentialSearch) {
    exponentialSearch(newArray, element, dispatch, operationSpeed);
  } else {
    fibonacciSearch(newArray, element, dispatch, operationSpeed);
  }
};
