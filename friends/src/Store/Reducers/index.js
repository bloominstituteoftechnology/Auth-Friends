import { FRIENDS_SUCCESS,  FETCH_FRIENDS, FRIENDS_ERROR } from '../Actions';

const initalState = {
  friends: [],
  fetching: false,
  error: null
}

export const friendReducers = (state = initalState, action) => {
  switch(action.type) {
    case FETCH_FRIENDS: 
    return Object.assign({}, state, { fetching: true });

    case FRIENDS_SUCCESS: 
    return Object.assign({}, state, { fetching: false, friends: action.payload });

    case FRIENDS_ERROR:
      return Object.assign({}, state, { error: `Error fetching friends ${action.payload}` })

    default: 
      return state;
  }
}