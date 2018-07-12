// import { FETCHING, FETCHED, ERROR } from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING':
      return Object.assign({}, state, {
        fetching: true,
      });

    case 'FETCHED':
      return Object.assign({}, state, {
        friends: action.payload,
        fetching: false,
        fetched: true,
      });

    case 'ERROR':
      return Object.assign({}, state, {
        error: action.payload,
      });

    default:
      return state;
  }
};

export default rootReducer;
