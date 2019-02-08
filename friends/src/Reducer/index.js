import { LOADING, SUCCESS, FALURE, ADDED } from '../Actions'

const initialState = {
  friends: [],
  fetchingFriends: false,
  error: null  
}

function reducer(state = initialState, action){
  switch(action.type){
    case LOADING:
      return{ ...state, fetchingFriends: true, friends: [], error: null}
    case SUCCESS:
      return{ ...state, fetchingFriends: false, friends: action.gotFriends, error: null}
    case FALURE:
      return{ ...state, fetchingFriends: false, friends: [], error: "Oops, something seems to have gone wrong :("}
    case ADDED:
      return{ ...state, friends: action.addedFriend}
    default:
    return state;
  }
}

export default reducer;