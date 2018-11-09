import { GET_FRIENDS, ERROR, LOADING } from '../actions/index'

const initialState = {
  friends: [],
  error: '',
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return Object.assign({}, state, { loading: true })
    case GET_FRIENDS:
      return Object.assign({}, state, { friends: action.friends, loading: false, error: '' })
    case ERROR:
      return Object.assign({}, state, {newFriend:action.newfriend},{ loading: false, error: action.errorMessage })




    default:
      return state

  }
}