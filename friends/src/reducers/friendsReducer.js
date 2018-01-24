// import { *actions here* } from '../actions';

// create initialState
const initialState = {
  fetchFriends: false,
  friendsFetched: false,
  saveFriends: false,
  updateFriend: false,
  friendUPdated: false,
  deleteFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

// create reducer  
// switch, case, return {...state, action}
// action.type
export const friendReducer = (state = initialState, action) => {

}