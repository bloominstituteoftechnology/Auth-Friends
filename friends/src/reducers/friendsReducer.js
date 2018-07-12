import { GET_FRIENDS } from '../actions'

const initialState = []
export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FRIENDS:
      return [ ...state, action.payload ]
    default:
      return state
  }
}
