import { combineReducers } from 'redux';
import algoReducer from './algorithm-selector-reducer/algorithm-selector-reducer';

const rootReducer = combineReducers({
  algorithm: algoReducer,
});

export default rootReducer;
