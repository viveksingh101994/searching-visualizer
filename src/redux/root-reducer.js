import { combineReducers } from 'redux';
import algoReducer from './algorithm-reducer/algorithm-reducer';

const rootReducer = combineReducers({
  algorithm: algoReducer,
});

export default rootReducer;
