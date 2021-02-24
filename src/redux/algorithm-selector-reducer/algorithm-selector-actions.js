import { getElementsAsPerAlgorithm } from '../../utils/utility';
import { AlgorithmActionTypes } from './alogrithm-selector-types';

export const setAlgo = (content) => {
  return {
    type: AlgorithmActionTypes.SET_LINEAR_SEARCH,
    payload: {
      items: getElementsAsPerAlgorithm(content),
      currentAlgo: content,
    },
  };
};

export const setItem = (content, currentAlgo) => {
  return {
    type: AlgorithmActionTypes.SET_LINEAR_SEARCH,
    payload: {
      items: [...content],
      currentAlgo: currentAlgo,
    },
  };
};
