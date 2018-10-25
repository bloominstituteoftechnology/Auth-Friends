// import actions here
import 
{
    FETCHING_FRIENDS,
    FRIENDS_FETCHED ,
    FRIENDS_SAVED ,
    SAVING_FRIENDS ,
    UPDATING_FRIEND ,
    FRIEND_UPDATED ,
    DELETING_FRIEND ,
    FRIEND_DELETED,
} from '../actions'

const initialState = 
{
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
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING_FRIENDS:
            return {state, fetchingFriends : true}

        case FRIENDS_FETCHED:
            return {...state, friends:[...state.friends, ...action.payload],fetchingFriends : false}

        default : return state;
    }
}