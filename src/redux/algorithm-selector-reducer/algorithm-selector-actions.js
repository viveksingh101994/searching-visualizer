import { getElementsAsPerAlgorithm } from '../../utils/utility';
import { AlgorithmActionTypes } from './algorithm-selector-types';

export const setAlgo = (content, arrayLength) => {
  return {
    type: AlgorithmActionTypes.SET_LINEAR_SEARCH,
    payload: {
      items: getElementsAsPerAlgorithm(content, arrayLength),
      currentAlgo: content,
      isRunning: 0,
    },
  };
};

export const setItem = (content, currentAlgo) => {
  return {
    type: AlgorithmActionTypes.SET_LINEAR_SEARCH,
    payload: {
      items: [...content],
      currentAlgo: currentAlgo,
      isRunning: setIsRunningStatus(content),
    },
  };
};

const setIsRunningStatus = (elements) => {
  if (elements.every((x) => !x.result && !x.visited)) {
    return 0;
  } else if (elements.some((x) => x.result)) {
    return 1;
  } else if (elements.some((x) => x.visited)) {
    return -1;
  }
};
