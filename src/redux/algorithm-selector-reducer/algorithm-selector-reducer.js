import { getElementsAsPerAlgorithm } from '../../utils/utility';
import { AlgorithmActionTypes } from './alogrithm-selector-types';

const INITIAL_STATE = {
  currentAlgo: 'linear-search',
  error: null,
  items: getElementsAsPerAlgorithm('linear-search'),
};

const algoReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action);
  switch (action.type) {
    case AlgorithmActionTypes.SET_BINARY_SEARCH:
    case AlgorithmActionTypes.SET_LINEAR_SEARCH:
      return {
        ...state,
        items: action.payload.items,
        currentAlgo: action.payload.currentAlgo,
        error: null,
      };
    default:
      return state;
  }
};

export default algoReducer;
