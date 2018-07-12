import { FETCH_START } from '../actions/actions';
import { FETCH_ERROR } from '../actions/actions';
import { FETCH_SUCCESS } from '../actions/actions';

export default (state = 'resting', action) => {
  switch (action.type) {
    case FETCH_START:
      return 'fetching';
    case FETCH_SUCCESS:
      return 'resting';
    case FETCH_ERROR:
      return 'resting';
    default:
    return state;
  }
}

export const getFetchState = state => state.fetchState;