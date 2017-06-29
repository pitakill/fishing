// @flow
import initialState from '@/initialState';

type BlueState = {
  blue: number
};

const {blue} = initialState;
const InitialState: BlueState = {blue};

export default (state: BlueState = InitialState, action: Action): BlueState => {
  switch(action.type) {
    case 'MOVE_BLUE':
      return Object.assign({}, state, {blue: action.blue});
    default:
      console.info('Default: MOVE_AI');
      return state;
  }
};
