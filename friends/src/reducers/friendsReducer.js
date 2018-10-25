import { 
    FETCHING, 
    SUCCESS, 
    FAILURE, 
    ADDING, 
    ADDED, 
    FAILED_ADD,
    UPDATING,
    UPDATED,
    FAILED_UPDATE
} from '../actions';

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
};

export const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                fetchingFriends: true
            }
        case SUCCESS:
            return {
                ...state,
                friends: [
                    ...state.friends,
                    ...action.payload
                ],
                fetchingFriends: false,
                friendsFetched: true
            }
        case FAILURE:
            return {
                ...state,
                fetchingFriends: false,
                error: action.payload
            }
        case ADDING:
            return {
                ...state,
                savingFriends: true,
            }
        case ADDED:
            return {
                ...state,
                savingFriends: false,
                friendsSaved: true,
                friends: [
                    ...action.payload
                ]
            }
        case FAILED_ADD:
            return {
                ...state,
                savingFriends: false,
                error: action.payload
            }
        case UPDATING:
            return {
                ...state,
                updatingFriend: true
            }
        case UPDATED:
            return {
                ...state,
                updatingFriend: false,
                friendUpdated: true,
                friends: [
                    ...action.payload
                ]
            }
        case FAILED_UPDATE:
            return {
                ...state,
                updatingFriend: false,
                error: action.payload

            }
        default:
            return state;
    }
};