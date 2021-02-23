import { AlgorithmActionTypes, Algorithms } from './alogrithm-types';

export const setAlgo = (content) => {
  return {
    type: AlgorithmActionTypes.SET_LINEAR_SEARCH,
    payload: content,
  };
};
