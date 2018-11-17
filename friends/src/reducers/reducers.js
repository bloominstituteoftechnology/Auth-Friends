import { FETCHING, SUCCESS, FAILIURE } from '../actions'


const initState = {
 friends : [],
 fetchingFriends: false,
 recievedFriends: false,
 addingFriend: false,
 friendAdded: false,
 error: null,

}

export const handleFriends = (state = initState, action) => {
 switch(action.type) {
  case FETCHING:
   return {...state, fetchingFriends: true}
  case SUCCESS:
  return Object.assign([], state {
   friends: action.payload,
   fetchingFriends: false,
   recievedFriends: true 
  })
  case FAILIURE:
  return {
   ...state, 
   error: action.payload, 
   fetchingFriends: false,
   recievedFriends: false 
  }
   default:
   return state
 }
}