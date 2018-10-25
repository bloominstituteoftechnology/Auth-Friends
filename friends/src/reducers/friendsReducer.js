import {FETCHING_FRIENDS, FETCHING_FRIENDS_FAILURE, FETCHING_FRIENDS_SUCCESS, 
        POSTING_FRIEND, POSTING_FRIEND_SUCCESS, POSTING_FRIEND_FAILURE,
        DELETING_FRIEND, DELETING_FRIEND_SUCCESS, DELETING_FRIEND_FAILURE
    } from '../actions';

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
    error: null
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return{...state, fetchingFriends: true};
    case FETCHING_FRIENDS_SUCCESS:
      return {...state,
              fetchingFriends:false,
              friends: [...state.friends, ...action.payload]};
    case FETCHING_FRIENDS_FAILURE:
      return {...state, fetchingFriends: false, error: action.payload};


    case POSTING_FRIEND:
        return{...state, savingFriends: true};
    case POSTING_FRIEND_SUCCESS:
        return {...state, 
                savingFriends: false,
                friends: [...action.payload]};
    case POSTING_FRIEND_FAILURE:
        return {...state,
                savingFriends: false,
                error: action.payload};


    case DELETING_FRIEND:
        return{...state, deletingFriends: true};
    case DELETING_FRIEND_SUCCESS:
        return {...state, 
                deletingFriends: false,
                friends: [...action.payload]};
    case DELETING_FRIEND_FAILURE:
        return {...state,
                deletingFriends: false,
                error: action.payload};
    
    default:
      return state;
  }
};
