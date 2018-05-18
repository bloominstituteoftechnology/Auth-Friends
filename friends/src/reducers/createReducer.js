import { SAVING_FRIENDS, SAVED_FRIENDS } from '../actionCreators/createFriends';

const initialState = {
  savingFriends: false,
  savedFriends: false,
  friends: [],
  error: null
}

export const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVING_FRIENDS:
      return Object.assign({}, state, {
        savingFriends: true,
      })
    case SAVED_FRIENDS:
      return Object.assign({}, state, {
        friends: state.friends.concat(action.payload),
        savingFriends: false,
        savedFriends: true,
      })
    case ERROR:
      return Object.assign({}, state, {
        savingFriends: false,
        error: action.payload,
      })
    default: 
      return state;
  }
}