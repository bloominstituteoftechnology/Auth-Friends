import {
    FETCH_FRIENDS_START, 
    FETCH_FRIENDS_SUCCESS, 
    FETCH_FRIENDS_FAILURE,
    ADD_FRIEND_START, 
    ADD_FRIEND_SUCCESS, 
    ADD_FRIEND_FAILURE,
    UPDATE_FRIEND_START,
    UPDATE_FRIEND_SUCCESS,
    UPDATE_FRIEND_FAILURE,
    DELETE_FRIEND_START,
    DELETE_FRIEND_SUCCESS,
    DELETE_FRIEND_FAILURE,
    STAGE_UPDATE
} from '../actions';

const initState = {
    fetchingFriends: false,
    savingFriends: false,
    updatingFriend: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    updateStaged: false,
    friendToUpdate: {},
    error: null
  };

const friendsReducer = (state=initState,action) => {
    switch(action.type) {
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingFriends: true
            }
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingFriends: false,
                friends: action.payload
            }
        case FETCH_FRIENDS_FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        case ADD_FRIEND_START:
            return {
                ...state,
                savingFriends: true
            }
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                savingFriends: false,
                friends: action.payload
            }
        case ADD_FRIEND_FAILURE:
            return {
                ...state,
                savingFriends: false,
                error: action.payload
            }
        case UPDATE_FRIEND_START:
            return {
                ...state,
                updatingFriend: true,
                updateStaged: false
            }
        case UPDATE_FRIEND_SUCCESS:
            return {
                ...state,
                updatingFriend: false,
                friends: action.payload
            }
        case UPDATE_FRIEND_FAILURE:
            return {
                ...state,
                updatingFriend: false,
                error: action.payload
            }
        case DELETE_FRIEND_START:
            return {
                ...state,
                deletingFriend: true
            }
        case DELETE_FRIEND_SUCCESS:
            return {
                ...state,
                deletingFriend: false,
                friends: action.payload
            }
        case DELETE_FRIEND_FAILURE:
            return {
                ...state,
                deletingFriend: false,
                error: action.payload
            }
        case STAGE_UPDATE:
            return {
                ...state,
                friendToUpdate: action.payload,
                updateStaged: true
            }
        default:
        return state;
    }
}

export default friendsReducer;