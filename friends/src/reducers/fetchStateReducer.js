import { FETCH_START } from '../actions/actions';
import { FETCH_ERROR } from '../actions/actions';
import { FETCH_SUCCESS } from '../actions/actions';
import { UPDATE_FRIEND_START } from '../actions/actions';
import { UPDATE_FRIEND_SUCCESS } from '../actions/actions';
import { UPDATE_FRIEND_ERROR } from '../actions/actions';

export default (state = 'resting', action) => {
  switch (action.type) {
    case FETCH_START:
      return 'fetching_all_friend';
    case FETCH_SUCCESS:
      return 'resting';
    case FETCH_ERROR:
      return 'resting';
    case UPDATE_FRIEND_START:
      return 'updating_friend';
    case UPDATE_FRIEND_SUCCESS:
      return 'resting';
    case UPDATE_FRIEND_ERROR:
      return 'resting';
    default:
    return state;
  }
}

export const getFetchState = state => state.fetchState;