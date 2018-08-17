import {
  FETCHING,
  FETCHED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED
} from "../actions";

const initialState = {
  friendsFetching: false,
  friendsFetched: false,
  friendsEditing: false,
  friendsEdited: false,
  friendsUpdating: false,
  friendsUpdated: false,
  friendsDeleting: false,
  friendsDeleted: false,
  friends: [],
  error: null
};

export const fetcher = (state = initialState, action) => {
  switch (action.type) {
      
    case FETCHING:
      return Object.assign({}, state, {
        friendsFetching: true
      });

    case FETCHED:
      return Object.assign({}, state, {
        friendsFetched: true,
        friendsFetching: false,
        friends: action.payload
      });

      case UPDATING:
      return Object.assign({}, state, {
        friendsUpdating: true 
      });
      
      case UPDATED:
      return Object.assign({}, state, {
        friendsUpdating: false,
        friendsUpdated: true,
        friends: action.payload
      });

      case DELETING:
      return Object.assign({}, state, {
        friendsDeleting: true 
      });
      
      case DELETED:
      return Object.assign({}, state, {
        friendsDeleting: false,
        friendsDeleted: true,
        friends: action.payload
      });
    default:
      return state;
  }
};
