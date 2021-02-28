import { getElementsAsPerAlgorithm } from '../../utils/utility';
import { setItem } from '../algorithm-selector-reducer/algorithm-selector-actions';
import { ArrayActionTypes } from './array-types';

export const setArrayLength = (algorithm, arrayLength) => {
  return {
    type: ArrayActionTypes.SET_ARRAY_LENGTH,
    payload: {
      items: arrayLength,
    },
  };
};

export const setOperationSpeed = (content) => {
  return {
    type: ArrayActionTypes.SET_OPERATION_SPEED,
    payload: {
      operationSpeed: content,
    },
  };
};
