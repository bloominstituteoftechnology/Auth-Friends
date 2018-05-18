import {FETCH_FRIENDS,
FRIENDS_FETCHED,
ADD_FRIEND,
FRIEND_UPDATED,
REMOVE_FRIEND,
FRIEND_REMOVED,
ERROR} from '../actions/friendsActions';

const initialState = {
  friends: [],
  fetching: false,
  editing: false,
  error: null,
  removing: false /* i'm guessing here*/
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_FETCHED:
      return Object.assign({}, state, {
        avengers: state.friends.concat(action.payload),
        fetching: false
      });
    case ADD_FRIEND:
      return Object.assign({}, state, { fetching: true });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        editing: false,
        error: action.payload
      });
    case FRIEND_UPDATED:
      return Object.assign({}, state, { editing: true });
    case REMOVE_FRIEND:
      return Object.assign({}, state, {
        friends: action.payload,
        editing: false
      });
      case FRIEND_REMOVED:
      return Object.assign({}, state, { removing: true }); /* I'm guessing here also*/
    default:
      return state;
  }
};