import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';
export const fibonacciSearch = async (array, elementToSearch, dispatch) => {
  elementToSearch = parseInt(elementToSearch);
  let fibMMm2 = 0;
  let fibMMm1 = 1;
  let fibM = fibMMm2 + fibMMm1;
  while (fibM < elementToSearch) {
    fibMMm2 = fibMMm1;
    fibMMm1 = fibM;
    fibM = fibMMm2 + fibMMm1;
  }

  let offset = -1;

  while (fibM > 1) {
    let i = Math.min(offset + fibMMm2, array.length - 1);
    array[i] = {
      num: array[i].num,
      visited: true,
      result: false,
    };

    if (array[i].num < elementToSearch) {
      fibM = fibMMm1;
      fibMMm1 = fibMMm2;
      fibMMm2 = fibM - fibMMm1;
      offset = i;
    } else if (array[i].num > elementToSearch) {
      fibM = fibMMm2;
      fibMMm1 = fibMMm1 - fibMMm2;
      fibMMm2 = fibM - fibMMm1;
    } else {
      array[i] = {
        num: array[i].num,
        visited: true,
        result: true,
      };
      await timer(1000);
      return dispatch(setItem(array, ALGORITHMS_CONSTANTS.linearSearch));
    }
    await timer(1000);
    dispatch(setItem(array, ALGORITHMS_CONSTANTS.linearSearch));
  }

  if (fibMMm1 && array[offset + 1].num === elementToSearch) {
    array[offset + 1] = {
      num: array[offset + 1].num,
      visited: true,
      result: true,
    };
    await timer(1000);
    return dispatch(setItem(array, ALGORITHMS_CONSTANTS.linearSearch));
  }

  dispatch(setItem(array, ALGORITHMS_CONSTANTS.linearSearch));
};
