// @flow
import {combineReducers} from 'redux';
import movingMain from './moveMain';
import {
  Blue as movingBlue,
  Red as movingRed,
  Yellow as movingYellow
} from './fishes';
import getInitialState from './initialState';

export default combineReducers({
  getInitialState,
  movingBlue,
  movingMain,
  movingRed,
  movingYellow
});
