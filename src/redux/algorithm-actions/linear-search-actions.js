import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';

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

    dispatch(setItem(array, ALGORITHMS_CONSTANTS.linearSearch));
  }
  await timer(1000);

  dispatch(setItem(array, ALGORITHMS_CONSTANTS.linearSearch));
};
