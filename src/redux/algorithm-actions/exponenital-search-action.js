import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';

export const exponentialSearch = async (array, elementToSearch, dispatch) => {
  elementToSearch = parseInt(elementToSearch);
  if (array[0].num === elementToSearch) {
    array[0] = {
      num: array[0].num,
      visited: true,
      result: true,
    };
    await timer(1000);
    dispatch(setItem(array, ALGORITHMS_CONSTANTS.exponentialSearch));
  }

  // Find range for binary search by
  // repeated doubling
  let i = 1;
  while (i < array.length && array[i].num <= elementToSearch) i = i * 2;

  //  Call binary search for the found range.
  await binarySearch(
    array,
    i / 2,
    Math.min(i, array.length - 1),
    elementToSearch,
    dispatch
  );
};

async function binarySearch(array, left, right, elementToSearch, dispatch) {
  if (right >= left) {
    let mid = left + (right - left) / 2;

    array[mid] = {
      num: array[mid].num,
      visited: true,
      result: false,
    };
    await timer(1000);
    dispatch(setItem(array, ALGORITHMS_CONSTANTS.exponentialSearch));
    if (array[mid].num === elementToSearch) {
      array[mid] = {
        num: array[mid].num,
        visited: true,
        result: true,
      };
      await timer(1000);
      return dispatch(setItem(array, ALGORITHMS_CONSTANTS.exponentialSearch));
    }
    if (array[mid].num > elementToSearch)
      return binarySearch(array, left, mid - 1, elementToSearch, dispatch);
    else return binarySearch(array, mid + 1, right, elementToSearch, dispatch);
  }
  return dispatch(setItem(array, ALGORITHMS_CONSTANTS.exponentialSearch));
}
