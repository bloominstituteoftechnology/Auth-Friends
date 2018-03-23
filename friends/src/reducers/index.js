import { GOT_FRIEND, GET_FRIEND, ADD_FRIEND, ADDED_FRIEND, ERROR, DELETING, DELETE_FRIEND } from '../actions';

const initialState = {
    friends: [],
    fetching: false,
    addingFriend: false,
    deletingFriend: false,
    error: null
};
// teacher used only friends = [] so part of the state

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIEND:
      return { ...state, fetching: true };
      // made a request so fetching is set to be true
    case GOT_FRIEND:
      return { ...state, friends: action.friends, fetching: false, error: null };
    case ERROR:
      return { ...state, error: action.errorMessage };
    case ADD_FRIEND:
      return { ...state, friends: action.friends, addingFriend: true};
    case ADDED_FRIEND:
      return { ...state, friends: action.friends, addingFriend: false, error: null};
    case DELETING:
      return { ...state, deletingFriend: true};
    case DELETE_FRIEND:
      return { ...state, friends: action.friends , deletingFriend: false, error: null};
    default:
      return state;
  }
};

// reset request after got, added, and deleted error to none
// while adding and deleting fetching is set to be false again to reset it since were done adding and deleting