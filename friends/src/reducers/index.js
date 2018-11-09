import { LOADING, GET_FRIENDS, ERROR } from '../actions';

// const initialState = {
//     fetchingFriends: false,
//     friendsFetched: false,
//     friendsSaved: false,
//     savingFriends: false,
//     updatingFriend: false,
//     friendUpdated: false,
//     deletingFriend: false,
//     friendDeleted: false,
//     friends: [],
//     error: null
//   }

const initialState = {
    loading: false,
    friends: [],
    error: ''
  }

  export default function (state = initialState, action) {
      switch(action.type) {
        case LOADING:
            return Object.assign({}, state, { loading: true })
        case GET_FRIENDS:
            return Object.assign({}, state, { friends: action.friends, loading: false, error: ''})
        case ERROR:
            return Object.assign({}, state, { error: action.errorMessage, loading: false})
          default:
            return state;
      }
  }