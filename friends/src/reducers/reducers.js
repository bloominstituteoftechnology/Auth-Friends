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
    error: null,
    friends: []
  };

  export const friendsReducer = (state = initialState, action) => {
      switch(action.type) {
          case FETCHING_FRIENDS:
            return Object.assign({},state, {
                fetchingFriends: true,
                friendsFetched: false,
                friendsSaved: false,
                savingFriends: false,
                updatingFriend: false,
                friendUpdated: false,
                deletingFriend: false,
                friendDeleted: false,
                error: null,
            })
            case FREINDS_FETCHED:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: true,
                friendsSaved: false,
                savingFriends: false,
                updatingFriend: false,
                friendUpdated: false,
                deletingFriend: false,
                friendDeleted: false,
                error: null,
            })
            case FRIENDS_SAVED:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: false,
                friendsSaved: true,
                savingFriends: false,
                updatingFriend: false,
                friendUpdated: false,
                deletingFriend: false,
                friendDeleted: false,
                error: null,
                friends: action.payload
            })
            case FRIENDS_SAVING:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: false,
                friendsSaved: false,
                savingFriends: true,
                updatingFriend: false,
                friendUpdated: false,
                deletingFriend: false,
                friendDeleted: false,
                error: null,
            })
            case FRIENDS_UPDATING:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: false,
                friendsSaved: false,
                savingFriends: false,
                updatingFriend: true,
                friendUpdated: false,
                deletingFriend: false,
                friendDeleted: false,
                error: null,
            })
            case FRIENDS_UPDATED:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: false,
                friendsSaved: false,
                savingFriends: false,
                updatingFriend: false,
                friendUpdated: true,
                deletingFriend: false,
                friendDeleted: false,
                error: null,
                friends: action.payload
            })
            case FRIENDS_DELETING:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: false,
                friendsSaved: false,
                savingFriends: false,
                updatingFriend: false,
                friendUpdated: false,
                deletingFriend: true,
                friendDeleted: false,
                error: null,
            })
            case FRIENDS_DELETED:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: false,
                friendsSaved: false,
                savingFriends: false,
                updatingFriend: false,
                friendUpdated: false,
                deletingFriend: false,
                friendDeleted: true,
                error: null,
                friends: action.payload
            })
            case FRIENDS_ERROR:
            return Object.assign({},state, {
                fetchingFriends: false,
                friendsFetched: false,
                friendsSaved: false,
                savingFriends: false,
                updatingFriend: false,
                friendUpdated: false,
                deletingFriend: false,
                friendDeleted: false,
                error: action.payload,
            })
          default: 
            return state;
      }
  }