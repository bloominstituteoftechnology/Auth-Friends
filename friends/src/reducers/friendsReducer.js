import { GET_FRIENDS } from '../actions'

export const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return [ ...state, action.payload ]
    default:
      return state
  }
}
