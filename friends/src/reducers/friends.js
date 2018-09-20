import {GETTING_FRIENDS, GET_FRIENDS, CREATING_FRIEND, CREATE_FRIEND, ERROR} from '../actions';

const initialState = {
    friends: [],
    gettingFriends: false,
    creatingFriend: false,
    error: null
  };

export const friends = (state = initialState, action) => {
  switch(action.type) {
    case GETTING_FRIENDS:
        return {
            ...state, 
            gettingFriends: true
        };
    case GET_FRIENDS:
        return {
            ...state, 
            friends: action-payload, 
            gettingFriends: false
        };
    case CREATING_FRIEND:
        return {
            ...state, 
            creatingFriend: true
        };
    case CREATE_FRIEND:
        return {
            ...state, 
            friends: action.payload, 
            creatingFriend: false
        };
    case ERROR:
        return {
            ...state, 
            gettingFriends: false, 
            creatingFriend: false, 
            error: action.payload
        };

    default: 
        return state;
  }
}