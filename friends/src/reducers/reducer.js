import {FETCHING_FRIENDS, FRIENDS_FETECHED,
        SAVING_FRIENDS, FRIENDS_SAVED, 
        UPDATING_FRIEND, FRIEND_UPDATED, 
        DELETING_FRIEND, FRIEND_DELETED, 
        ERROR} from '../actions/action.js';

  const initialState = {friends:[{  id: 1,
                                    name: 'Joe',
                                    age: 24,
                                    email: 'joe@lambdaschool.com'
                                }], 
                        fetchingFriends: false,
                        friendsFetched: false,
                        friendsSaved: false,
                        savingFriends: false,
                        updatingFriend: false,
                        friendUpdated: false,
                        deletingFriend: false,
                        friendDeleted: false,
                        error: null};
  
export const friendReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
        return Object.assign({}, state, {fetchingFriends: true });
    case FRIENDS_FETECHED:
        return Object.assign({}, state, {friendsFetched: true, 
                                        fetchingFriends: false});
    case SAVING_FRIENDS:
        return Object.assign({}, state,{savingFriends: true });
    case FRIENDS_SAVED:
        return Object.assign({}, state, {friendsSaved: true, 
                                        savingFriends: false});
    case UPDATING_FRIEND:
        return Object.assign({}, state, {updatingFriend: true });
    case FRIEND_UPDATED:
        return Object.assign({}, state, {friendUpdated: true, 
                                updatingFriend: false}); 
    case DELETING_FRIEND:
        return Object.assign({}, state, {deletingFriend: true });
    case FRIEND_DELETED:
        return Object.assign({}, state, {friendDeleted: true, 
                                deletingFriend: false});
    case ERROR:
        return Object.assign({}, state, {fetching: false, 
                                error: "Error fetching friends data"});
    default:
      return state;
  }
};
