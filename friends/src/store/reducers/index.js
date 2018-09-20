import { ACTIONS } from '../actions';

const initialState= {
    fetchingFriends: false,
    friendsFetched: false,
    friendAdded: false,
    addingFriend: false,
    friends: [],
    error: null
  }

  export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ACTIONS.FETCHING_FRIENDS:
        return {...state, fetchingFriends: true};

        case ACTIONS.FETCHED_FRIENDS:
        return {...state, fetchingFriends: false, friends: action.friends};

        case ACTIONS.ADDING_FRIEND:
        return {...state, addingFriend: true};

        case ACTIONS.FRIEND_ADDED:
        return {...state, addingFriend: true, friends: action.friends};

        default:
        return state;
    }
  }