// @flow
import initialState from '@/initialState';

const {size} = initialState;

export const getHalf = (size: number): number => Math.ceil(size * size / 2);

export const getRandomInt = (size: number, double: boolean = true): number => {
  let max = size;
  if (double) max = size * size;
  return Math.floor(Math.random() * max) + 1;
};

export const moveRandom = (thisProp: number, cb: Function): void => {
  /*
   * 1 -> UP
   * 2 -> RIGHT
   * 3 -> DOWN
   * 4 -> LEFT
   */
  const direction: number  = getRandomInt(4, false);
  // Maybe the best approach is detect where the fish can go, then with a random
  // number go to one of the possibilities.
  switch(direction) {
    case 1:
      if (thisProp % size === 1)
  };
  if (thisProp > 1) cb(thisProp - 1);
};
