import { FETCHING, SUCCESS, FAILURE } from '../actions/actions'


const initState = {
 friends : [],
 fetchingFriends: false,
 receivedFriends: false,
 addingFriend: false,
 friendAdded: false,
 error: null,

}

export const reducer = (state = initState, action) => {
 switch(action.type) {
  case FETCHING:
   return {...state, fetchingFriends: true}
  case SUCCESS:
  return Object.assign({}, state, {
   friends: [...action.payload],
   fetchingFriends: false,
   receivedFriends: true 
  })
  case FAILURE:
  return Object.assign({}, state, {
   fetchingFriends: false,
   receivedFriends: false,
   error: action.payload
  })
   default:
   return state
 }
}