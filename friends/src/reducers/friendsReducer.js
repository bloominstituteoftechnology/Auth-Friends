import {FETCHING_DATA, DATA_SUCCESS, DATA_ERROR} from '../actions'

const initialState = {
  fetchingFriends: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        fetchingFriends: true
      };
    case DATA_SUCCESS:
      return {
        ...state,
        friends: [ 
          ...action.results
        ],
        fetchingFriends: false,
      };
    case DATA_ERROR:
      return {
        ...state,
          fetchingFriends: false,
          error: action.error
        };
    default:
      return state;
  }
};