import { ArrayActionTypes } from './array-types';
const INITIAL_STATE = {
  arrayLength: 10,
  operationSpeed: -3,
};

const arrayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ArrayActionTypes.SET_ARRAY_LENGTH:
      return {
        ...state,
        arrayLength: action.payload.items,
      };
    case ArrayActionTypes.SET_OPERATION_SPEED:
      return {
        ...state,
        operationSpeed: action.payload.operationSpeed,
      };
    default:
      return state;
  }
};

export default arrayReducer;
