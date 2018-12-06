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
  DELETING_FRIEND,
  DELETE_SUCCESSFUL,
  DELETE_FAILURE,
} from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  error: null,
  addingFriend: false,
  selectedFriend: null,
  editMode: false,
};

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
    case DELETING_FRIEND:
      return {
        ...state,
        editmode: false,
        selectedFriend: null,
      };
    case DELETE_SUCCESSFUL:
      return {
        ...state,
        friends: action.payload,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    default:
      return state;
  }
};
