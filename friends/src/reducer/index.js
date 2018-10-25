import { FETCHING_FRIENDS, FETCH_FRIEND_SUCCESS,ERROR, ADDING_FRIEND, ADD_FRIEND_SUCCESS, UPDATING_FRIEND, UPDATE_FRIEND_SUCCESS, DELETING_FRIEND, DELETE_FRIEND_SUCCESS} from '../actions';

const initialState = {
    friends: [], 
    fetchingFriends: false,
    updatingFriend: false,
    addingFriend: false,
    deletingFriend: false,
    error: null
}

export const friendsReducer = (state = initialState, action) => {

    switch(action.type){
        case FETCHING_FRIENDS:
        return {...state, fetchingFriends: true, error: false}
        case FETCH_FRIEND_SUCCESS:
        return {...state, friends: action.payload, fetchingFriends: false, error: false}
        case ADDING_FRIEND:
        return {...state, addingFriend: true, error: false}
        case ADD_FRIEND_SUCCESS:
        return {...state, friends: action.payload, addingFriend: false, error: false}
        case UPDATING_FRIEND:
        return {...state, updatingFriend: true, error: false}
        case UPDATE_FRIEND_SUCCESS:
        return {...state, friends: action.payload, updatingFriend: false, error: false}
        case DELETING_FRIEND:
        return {...state, deletingFriend: true, error: false}
        case DELETE_FRIEND_SUCCESS:
        return {...state, friends: action.payload, deletingFriend: false, error: false}
        case ERROR:
        return {...state, error: true}

        default: 
        return state
    }
}