import {
  FETCHING_DATA,
  DATA_FETCHED,
  FETCH_ERROR,
  ADD_FRIEND_START,
  ADD_FRIEND_COMPLETE,
  ADD_FRIEND_ERROR,
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
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    case ADD_FRIEND_START:
      return {
        ...state,
        addingFriend: true,
      };
    case ADD_FRIEND_COMPLETE:
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
    default:
      return state;
  }
};
