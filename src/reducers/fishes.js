// @flow
import initialState from '@/initialState';

type BlueState = {
  blue: number
};
type RedState = {
  red: number
};
type YellowState = {
  yellow: number
};

const {blue} = initialState;
const InitialStateBlue: BlueState = {blue};
const {reds} = initialState;
const red = reds[0];
const InitialStateRed: RedState = {red};
const {yellow} = initialState;
const InitialStateYellow: YellowState = {yellow};

export const Blue = (state: BlueState = InitialStateBlue, action: Action): BlueState => {
  switch(action.type) {
    case 'MOVE_BLUE':
      return Object.assign({}, state, {blue: action.blue});
    default:
      console.info('Default: MOVE_AI_BLUE');
      return state;
  }
};
export const Red = (state: RedState = InitialStateRed, action: Action): RedState => {
  switch(action.type) {
    case 'MOVE_RED':
      return Object.assign({}, state, {red: action.red});
    default:
      console.info('Default: MOVE_AI_RED');
      return state;
  }
};
export const Yellow = (state: YellowState = InitialStateYellow, action: Action): YellowState => {
  switch(action.type) {
    case 'MOVE_YELLOW':
      return Object.assign({}, state, {yellow: action.yellow});
    default:
      console.info('Default: MOVE_AI_YELLOW');
      return state;
  }
};
