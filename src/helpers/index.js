// @flow
export function getRandomInt(size: number): number {
  return Math.floor(Math.random() * size * size) + 1;
};

export function getHalf(size: number): number {
  return Math.ceil(size * size / 2);
};
