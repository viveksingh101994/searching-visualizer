import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';

export const jumpSearch = async (
  array,
  elementToSearch,
  dispatch,
  operationSpeed
) => {
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
    await timer(operationSpeed);
    dispatch(setItem(array, ALGORITHMS_CONSTANTS.jumpSearch));
    prev = jumpingSize;
    jumpingSize += Math.floor(Math.sqrt(array.length));
    if (prev >= jumpingSize) {
      return dispatch(setItem(array, ALGORITHMS_CONSTANTS.jumpSearch));
    }
  }

  while (array[prev].num < parseInt(elementToSearch)) {
    array[prev] = {
      num: array[prev].num,
      visited: true,
      result: false,
    };
    await timer(operationSpeed);
    dispatch(setItem(array, ALGORITHMS_CONSTANTS.jumpSearch));
    prev++;
    if (prev === Math.min(jumpingSize, array.length)) {
      await timer(operationSpeed);
      return dispatch(setItem(array, ALGORITHMS_CONSTANTS.jumpSearch));
    }
  }

  if (array[prev].num === parseInt(elementToSearch)) {
    array[prev] = {
      num: array[prev].num,
      visited: true,
      result: true,
    };
  }
  await timer(operationSpeed);
  dispatch(setItem(array, ALGORITHMS_CONSTANTS.jumpSearch));
};
