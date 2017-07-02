// @flow
type Config = {
  blue: number,
  reds: Array<number>,
  main: number,
  size: number,
  yellow: number
};

type CellConfig = {
  blue?: boolean,
  main?: boolean,
  red?: boolean,
  size: number,
  yellow?: boolean
};

type Action =
  // Move
    {type: 'MOVE_TO_LEFT', main: number}
  | {type: 'MOVE_TO_UP', main: number}
  | {type: 'MOVE_TO_RIGHT', main: number}
  | {type: 'MOVE_TO_DOWN', main: number}
  // Get Initial State
  | {
    type: 'GET_INITIAL_STATE',
    blue: number,
    reds: Array<number>,
    main: number,
    size: number,
    yellow: number
  }
  // Fishes
  | {type: 'MOVE_BLUE', blue: number}
  | {type: 'MOVE_RED', red: number}
  | {type: 'MOVE_YELLOW', yellow: number}
;
