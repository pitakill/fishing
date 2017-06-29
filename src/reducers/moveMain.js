// @flow
import initialState from '@/initialState';

type MainState = {
  main: number,
};

const {main} = initialState;
const InitialState: MainState = {main};

export default (state: MainState = InitialState, action: Action): MainState => {
  switch(action.type) {
    case 'MOVE_TO_LEFT':
      return Object.assign({}, state, {
        main: action.main
      });
    case 'MOVE_TO_UP':
      return Object.assign({}, state, {
        main: action.main
      });
    case 'MOVE_TO_RIGHT':
      return Object.assign({}, state, {
        main: action.main
      });
    case 'MOVE_TO_DOWN':
      return Object.assign({}, state, {
        main: action.main
      });
    default:
      console.info('Default: MOVE_TO_*');
      return state;
  }
};
