import { SF, SDF } from "../actions";

const firstState = {
    fetchingFriends: true,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null
  }

export const reducer = (state = firstState, action) => {
  switch (action.type) {
    case 'FRIENDS_FETCHED':
        console.log('hello')
        return {...state, friends: action.payload.slice(), fetchingFriends: false, friendsFetched:true}

    case 'FRIENDS_FETCHING':
        return {...state, fetchingFriends: true, friendsFetched: false};

    case 'FRIENDS_DELETED:':
    
    case SF:
      return {...state, savingFriends: true, friendsSaved: false}
      
    case SDF:
      return {...state, friends: action.payload, savingFriends: false, friendsSaved: true}

    case 'UPDATING_FRIENDS':
      return {...state, updatingFriend: true, friendsUpdated: false} 
      
    case 'UPDATED_FRIENDS':
      return {...state, friends: action.payload, updatingFriend:false, friendsUpdated: true}  
    case 'DELETING_FRIENDS':  
    return {...state, deletingFriend: true, friendsDeleted: false}

    case 'DELETED_FRIENDS':
      return {...state, deletingFriend: false, friendDeleted: true, friends: action.payload}
    default:
      return state;
  }
};
