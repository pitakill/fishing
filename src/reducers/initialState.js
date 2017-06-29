// @flow
import initialState from '@/initialState';

type InitalState = {
  blue: number,
  main: number,
  reds: Array<number>,
  size: number,
  yellow: number
};

export default (state: InitalState = initialState, action: Action): InitalState => {
  switch(action.type) {
    case 'GET_INITIAL_STATE':
      const {type, ...stateInstance} = action;
      return Object.assign({}, state, {...stateInstance});
    default:
      console.log('Default: GET_INITIAL_STATE');
      return state;
  }
};
