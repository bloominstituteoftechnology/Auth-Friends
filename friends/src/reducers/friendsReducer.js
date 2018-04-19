import { FETCHINGFRIENDS, FRIENDSFETCHED, ERROR } from '../actions'

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

export const friendsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHINGFRIENDS:
      return Object.assign({}, state, {
        fetchingFriends: true,
        friendsFetched: false
      })

    case FRIENDSFETCHED:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: true,
        friends: [...state.friends, ...payload]
      })

    case ERROR:
      return Object.assign({}, state, {
        fetchingFriends: false,
        friendsFetched: true,
        error: payload
      })

    default:
      return state
  }
}
