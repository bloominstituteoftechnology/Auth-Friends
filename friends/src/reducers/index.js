import {FETCHING_FRIENDS, FRIENDS_FETCHED, FRIENDS_FETCH_ERROR} from '../actions';


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
    case FETCHING_FRIENDS:
      return {...state, fetching:true}
    case FRIENDS_FETCHED:
      return {...state, friends:action.payload, fetching:false, fetched:true}
    case FRIENDS_FETCH_ERROR:
      return {...state, err:action.payload}
    default:
      return state
  }
}

export {friendsReducer}