import { ALGORITHMS_CONSTANTS } from '../../constants/constant';
import { getElementsAsPerAlgorithm } from '../../utils/utility';
import { AlgorithmActionTypes } from './alogrithm-selector-types';

const INITIAL_STATE = {
  currentAlgo: ALGORITHMS_CONSTANTS.linearSearch,
  error: null,
  items: getElementsAsPerAlgorithm('linear-search'),
};

const algoReducer = (state = INITIAL_STATE, action) => {
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
