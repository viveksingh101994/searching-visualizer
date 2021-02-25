import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';
import { Algorithms } from '../algorithm-selector-reducer/alogrithm-selector-types';

export const jumpSearch = async (array, elementToSearch, dispatch) => {
  let jumpingSize = Math.floor(Math.sqrt(array.length));
  let prev = 0;
  while (
    array[Math.min(jumpingSize, array.length) - 1].num <
    parseInt(elementToSearch)
  ) {
    array[Math.min(jumpingSize, array.length) - 1] = {
      num: array[Math.min(jumpingSize, array.length) - 1].num,
      visited: true,
      result: false,
    };
    await timer(1000);
    dispatch(setItem(array, Algorithms.jumpSearch));
    prev = jumpingSize;
    jumpingSize += Math.floor(Math.sqrt(array.length));
    if (prev >= jumpingSize) {
      return dispatch(setItem(array, Algorithms.jumpSearch));
    }
  }

  while (array[prev].num < parseInt(elementToSearch)) {
    array[prev] = {
      num: array[prev].num,
      visited: true,
      result: false,
    };
    await timer(1000);
    dispatch(setItem(array, Algorithms.jumpSearch));
    prev++;
    if (prev === Math.min(jumpingSize, array.length)) {
      await timer(1000);
      return dispatch(setItem(array, Algorithms.jumpSearch));
    }
  }

  if (array[prev].num === parseInt(elementToSearch)) {
    array[prev] = {
      num: array[prev].num,
      visited: true,
      result: true,
    };
  }
  await timer(1000);
  dispatch(setItem(array, Algorithms.jumpSearch));
};
