import { GET_FRIENDS, GET_SUCCESS, GET_FAILURE } from '../actions';

const initialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friends: [],
    errors: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS:
            return Object.assign({}, state, {
                fetchingFriends: true,
            })
        case GET_SUCCESS:
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: true,
                friends: [...state.friends, action.payload]
            })
        case GET_FAILURE: 
            return Object.assign({}, state, {
                fetchingFriends: false,
                friendsFetched: false,
                errors: [...state.errors, action.error]
            })
    
      default:
        return state;
    }
  };