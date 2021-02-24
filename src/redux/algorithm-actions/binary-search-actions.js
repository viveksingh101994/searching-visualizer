import { timer } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';
import { Algorithms } from '../algorithm-selector-reducer/alogrithm-selector-types';

export const binarySearch = async (array, elementToSearch, dispatch) => {
  let items = [...array];
  let start = 0,
    end = items.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let midItem = { ...items[mid] };
    midItem.visited = true;
    items[mid] = midItem;
    await timer(1000);
    dispatch(setItem(items, Algorithms.binarySearch));
    if (items[mid].num === parseInt(elementToSearch)) {
      midItem.result = true;
      items[mid] = midItem;
      await timer(1000);
      dispatch(setItem(items, Algorithms.binarySearch));
      break;
    } else if (items[mid].num < parseInt(elementToSearch)) {
      let startItem = { ...items[start] };
      startItem.visited = true;
      items[start] = startItem;
      let endItem = { ...items[end] };
      endItem.visited = true;
      items[end] = endItem;
      await timer(1000);
      dispatch(setItem(items, Algorithms.binarySearch));
      start = mid + 1;
    } else {
      let startItem = { ...items[start] };
      startItem.visited = true;
      items[start] = startItem;
      let endItem = { ...items[end] };
      endItem.visited = true;
      items[end] = endItem;
      await timer(1000);
      dispatch(setItem(items, Algorithms.binarySearch));
      end = mid - 1;
    }
  }
  await timer(1000);
  dispatch(setItem(items, Algorithms.binarySearch));
};
