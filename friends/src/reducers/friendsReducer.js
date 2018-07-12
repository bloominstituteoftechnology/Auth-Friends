import { GET_FRIENDS, POST_FRIEND } from '../actions'

export const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return [ ...state, action.payload ]
    case POST_FRIEND:
      return [ ...state, action.payload ]
    default:
      return state
  }
}
