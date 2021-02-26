import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';

export const interpolationSearch = async (array, elementToSearch, dispatch) => {
  let low = 0;
  let high = array.length - 1;
  while (
    low <= high &&
    parseInt(elementToSearch) >= array[low].num &&
    parseInt(elementToSearch) <= array[high].num
  ) {
    array[low] = {
      num: array[low].num,
      visited: true,
      result: false,
    };
    array[high] = {
      num: array[high].num,
      visited: true,
      result: false,
    };
    await timer(1000);
    dispatch(setItem(array, ALGORITHMS_CONSTANTS.interpolationSearch));
    if (low === high) {
      if (array[low].num === parseInt(elementToSearch)) {
        array[low] = {
          num: array[low].num,
          visited: true,
          result: true,
        };
      }
      await timer(1000);
      return dispatch(setItem(array, ALGORITHMS_CONSTANTS.interpolationSearch));
    }
    debugger;
    let pos = Math.floor(
      low +
        ((high - low) / (array[high].num - array[low].num)) *
          (parseInt(elementToSearch) - array[low].num)
    );

    array[pos] = {
      num: array[pos].num,
      visited: true,
      result: false,
    };

    if (array[pos].num === parseInt(elementToSearch)) {
      array[pos] = {
        num: array[pos].num,
        visited: true,
        result: true,
      };
      await timer(1000);
      return dispatch(setItem(array, ALGORITHMS_CONSTANTS.interpolationSearch));
    }
    await timer(1000);
    dispatch(setItem(array, ALGORITHMS_CONSTANTS.interpolationSearch));
    if (array[pos].num < parseInt(elementToSearch)) low = pos + 1;
    else high = pos - 1;
  }
  return dispatch(setItem(array, ALGORITHMS_CONSTANTS.interpolationSearch));
};
