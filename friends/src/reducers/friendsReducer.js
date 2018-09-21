import {
  FETCHING_DATA,
  DATA_FETCHED,
  FETCH_ERROR,
  INITIALIZE_FRIEND_ADD,
  COMPLETE_FRIEND_ADD,
  ADD_FRIEND_ERROR,
  DISPLAY_UPDATE_FORM,
  UPDATING_FRIEND,
  UPDATED_FRIEND,
  UPDATE_ERROR,
} from '../actions';

const initialState = {
  friends: [],
  fetchingData: false,
  dataFetched: false,
  addingFriend: false,
  error: '',
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, fetchingData: true };
    case DATA_FETCHED:
      return {
        ...state,
        friends: action.payload,
        fetchingData: false,
        dataFetched: true,
        updatingFriend: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    case INITIALIZE_FRIEND_ADD:
      return {
        ...state,
        addingFriend: true,
      };
    case COMPLETE_FRIEND_ADD:
      return {
        ...state,
        addingFriend: false,
        friends: action.payload,
      };
    case ADD_FRIEND_ERROR:
      return {
        ...state,
        error: 'Error adding friend',
        addingFriend: false,
      };
    case DISPLAY_UPDATE_FORM:
      return {
        ...state,
        friends: state.friends.filter(
          (friend) => friend.id === action.payload.id
        ),
        updatingFriend: true,
      };
    case UPDATING_FRIEND:
      break;
    case UPDATED_FRIEND:
      break;
    case UPDATE_ERROR:
      break;
    default:
      return state;
  }
  
};