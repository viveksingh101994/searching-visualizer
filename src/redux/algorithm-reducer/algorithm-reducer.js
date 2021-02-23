import { AlgorithmActionTypes } from './alogrithm-types';

const INITIAL_STATE = {
  currentAlgo: 'linear-search',
  error: null,
};

const algoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AlgorithmActionTypes.SET_BINARY_SEARCH:
    case AlgorithmActionTypes.SET_LINEAR_SEARCH:
      return {
        ...state,
        currentAlgo: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default algoReducer;
