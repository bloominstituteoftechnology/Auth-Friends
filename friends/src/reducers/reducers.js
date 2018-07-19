import {
    FETCHING_FRIENDS, 
    FREINDS_FETCHED, 
    FRIENDS_SAVED, 
    FRIENDS_SAVING, 
    FRIENDS_UPDATING, 
    FRIENDS_UPDATED, 
    FRIENDS_DELETING, 
    FRIENDS_DELETED, 
    FRIENDS_ERROR} from '../actions/actions'

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
      switch(action.type) {
          
      }
  }