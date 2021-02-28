import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';

export const binarySearch = async (
  array,
  elementToSearch,
  dispatch,
  operationSpeed
) => {
  let items = [...array];
  let start = 0,
    end = items.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midItem = { ...items[mid] };
    midItem.visited = true;
    items[mid] = midItem;
    await timer(operationSpeed);
    dispatch(setItem(items, ALGORITHMS_CONSTANTS.binarySearch));
    if (items[mid].num === parseInt(elementToSearch)) {
      midItem.result = true;
      items[mid] = midItem;
      await timer(operationSpeed);
      dispatch(setItem(items, ALGORITHMS_CONSTANTS.binarySearch));
      break;
    } else if (items[mid].num < parseInt(elementToSearch)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  await timer(operationSpeed);
  dispatch(setItem(items, ALGORITHMS_CONSTANTS.binarySearch));
};
