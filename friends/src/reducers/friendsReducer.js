import { 
  FETCHINGFRIENDS,
  FRIENDSFETCHED
} from '../actions'

const initalState = {
  fetchingFriends: false,
  friendsFetched: false,
  friends: [
  ],
  error: null
}

export const friendsReducer = (state = initalState, action) => {
  console.log('reducer', action)

  switch (action.type) {
    case FETCHINGFRIENDS:

      return {
        ...state,
        fetchingFriends: true 
      }
    case FRIENDSFETCHED:
        return {
          ...state,
          friends: action.data,
          friendsFetched: true 
        }
    default:
      return state;
  }
}