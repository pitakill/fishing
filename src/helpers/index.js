// @flow
const size = 11;

export const getHalf = (size: number): number => Math.ceil(size * size / 2);

export const getRandomInt = (size: number, double: boolean = true): number => {
  let max = size;
  if (double) max = size * size;
  return Math.floor(Math.random() * max) + 1;
};

export const moveRandom = (thisProp: number, cb: Function): void => {
  /*
   * 1 -> LEFT
   * 2 -> UP
   * 3 -> RIGHT
   * 4 -> DOWN
   */
  // Maybe the best approach is detect where the fish can go, then with a random
  // number go to one of the possibilities.
  //
  // Array of possibles directions
  // Random number from 0 to Array(directions).length
  // Go to that random direction
  // iterate over and over
  let direction: Array<number> = [];

  if (thisProp % size !== 1) direction.push(1);
  if (thisProp > size) direction.push(2);
  if (thisProp % size !== 0) direction.push(3);
  if (thisProp < size * (size - 1)) direction.push(4);

  const moveTo = direction[getRandomInt(direction.length, false) - 1];

  switch(moveTo) {
    case 1:
      cb(thisProp - 1);
      return;
    case 2:
      cb(thisProp - size);
      return;
    case 3:
      cb(thisProp + 1);
      return;
    case 4:
      cb(thisProp + size);
      return;
    default:
      return;
  }
};
