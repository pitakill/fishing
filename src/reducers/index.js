// @flow
import {combineReducers} from 'redux';
import movingMain from './moveMain';
import movingAI from './fishes';
import getInitialState from './initialState';

export default combineReducers({
  getInitialState,
  movingAI,
  movingMain
});
