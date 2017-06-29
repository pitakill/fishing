// @flow
import initialState from '@/initialState';

export const getInitialState = (): Action => ({
  type: 'GET_INITIAL_STATE', ...initialState
});
