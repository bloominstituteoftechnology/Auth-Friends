import { PENDING_FRIENDS, SUCCESS_FRIENDS, ERROR } from '../actions';



let initialState = {
    pending: false,
    error: null,
    friends: [] 
  }


export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case PENDING_FRIENDS:
            return Object.assign({}, state, {pending: true})
        case SUCCESS_FRIENDS:
            return Object.assign({}, state, {friends: state.friends.concat(action.payload), pending: false})
        case ERROR:
            return Object.assign({}, state, {error: action.payload, pending: false})
        default: 
            return state;

    }
}