import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';
import { Algorithms } from '../algorithm-selector-reducer/alogrithm-selector-types';

export const linearSearch = async (array, elementToSearch, dispatch) => {
  for (let i = 0; i < array.length; i++) {
    if (parseInt(elementToSearch) === array[i].num) {
      array[i] = {
        num: array[i].num,
        visited: true,
        result: true,
      };
      break;
    } else {
      array[i] = {
        num: array[i].num,
        visited: true,
        result: false,
      };
    }
    await timer(1000);

    dispatch(setItem(array, Algorithms.linearSearch));
  }
  await timer(1000);

  dispatch(setItem(array, Algorithms.linearSearch));
};
