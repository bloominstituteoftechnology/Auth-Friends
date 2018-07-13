import {FETCHING_FRIENDS, FRIENDS_FETCHED, FRIENDS_FETCH_ERROR} from '../actions';
import {POSTING_FRIEND, FRIEND_POSTED, FRIEND_POSTING_ERROR} from '../actions';
import {DELETING_FRIEND, FRIEND_DELETED, FRIEND_DELETING_ERROR} from '../actions';
import {FETCHING_FRIEND, FRIEND_FETCHED, FRIEND_FETCH_ERROR} from '../actions';

const initialState = {
  friends: [],
  friend: {},
  fetching:false,
  fetched:false,
  posting:false,
  posted:false,
  putting:false,
  put:false,
  deleting:false,
  deleted:false,
  err:null
}

const friendsReducer = (state = initialState, action) => {

  switch (action.type) {
    //Getting Friends
    case FETCHING_FRIENDS:
      return {...state, fetching:true, fetched:false, posting:false, posted:false, deleting:false, deleted:false}
    case FRIENDS_FETCHED:
      return {...state, friends:action.payload, fetching:false, fetched:true, posting:false, posted:false, deleting:false, deleted:false}
    case FRIENDS_FETCH_ERROR:
      return {...state, err:action.payload}
    
    //Posting a new Friend
    case POSTING_FRIEND:
      return {...state, fetching:false, fetched:false, posting:true, posted:false, deleting:false, deleted:false}
    case FRIEND_POSTED:
      return {...state, friends:action.payload, fetching:false, fetched:true, posting:false, posted:true, deleting:false, deleted:false}
    case FRIEND_POSTING_ERROR:
      return {...state, err:action.payload}
    
    //Deleting a friend
    case DELETING_FRIEND:
      return {...state, fetching:false, fetched:false, posting:true, posted:false, deleting:true, deleted:false}
    case FRIEND_DELETED:
      return {...state, friends:action.payload, fetching:false, fetched:false, posting:true, posted:false, deleting:false, deleted:true}
    case FRIEND_DELETING_ERROR:
      return {...state, err:action.payload}

    //Getting Friend
    case FETCHING_FRIEND:
      return {...state, fetching:false, fetched:false, posting:false, posted:false, deleting:false, deleted:false}
    case FRIEND_FETCHED:
      return {...state, friend:action.payload, fetching:false, fetched:true, posting:false, posted:false, deleting:false, deleted:false}
    case FRIEND_FETCH_ERROR:
      return {...state, err:action.payload}

    default:
      return state
  }
}

export {friendsReducer}