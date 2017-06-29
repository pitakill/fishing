// @flow
import {getRandomInt, getHalf} from 'Helpers';

const size: number = 11;
export default {
  blue: getRandomInt(size),
  main: getHalf(size),
  reds: [getRandomInt(size)],
  size,
  yellow: getRandomInt(size)
};
