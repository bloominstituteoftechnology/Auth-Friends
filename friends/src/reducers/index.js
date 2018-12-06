import {
  FETCHING_FRIENDS,
  FRIEND_FETCH_SUCCESS,
  FRIEND_FETCH_FAILURE,
  ADDING_FRIEND,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_FAILURE,
  FRIEND_SELECTED,
  EDITING_FRIEND,
  EDIT_FRIEND_SUCCESS,
  EDIT_FRIEND_FAILURE,
  CLEAR_SELECTED,
} from '../actions';
const initialState = {
  friends: [],
  fetching: false,
  error: null,
  addingFriend: false,
  friendAdded: false,
  selectedFriend: null,
  editMode: false,
};

// click to select friend. form will populate with friend's info.
// you can edit there. or click anywhere to clear selected.

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return {
        ...state,
        fetching: true,
      };
    case FRIEND_FETCH_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        fetching: false,
      };
    case FRIEND_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    case ADDING_FRIEND:
      return {
        ...state,
        addingFriend: true,
      };
    case ADD_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        addingFriend: false,
        friendAdded: true, // do I really need this? don't think so
      };
    case ADD_FRIEND_FAILURE:
      return {
        ...state,
        addingFriend: false,
        error: action.payload,
      };
    case FRIEND_SELECTED:
      return {
        ...state,
        selectedFriend: state.friends.find(f => f.id === action.payload),
        editMode: true,
      };
    case EDITING_FRIEND:
      return {
        ...state,
        editMode: true,
      };
    case EDIT_FRIEND_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        editMode: false,
      };
    case EDIT_FRIEND_FAILURE:
      return {
        ...state,
        editMode: false,
        err: action.payload,
      };
    case CLEAR_SELECTED:
      return {
        ...state,
        editMode: false,
        selectedFriend: null,
      };
    default:
      return state;
  }
};
