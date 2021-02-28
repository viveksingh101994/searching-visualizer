import { combineReducers } from 'redux';
import algoReducer from './algorithm-selector-reducer/algorithm-selector-reducer';
import arrayReducer from './array/array-reducer';

const rootReducer = combineReducers({
  algorithm: algoReducer,
  operation: arrayReducer,
});

export default rootReducer;
