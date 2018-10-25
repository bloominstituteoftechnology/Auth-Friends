// import actions here
import FETCHING_FRIENDS from '../actions'
import FRIENDS_FETCHED from '../actions'
import FRIENDS_SAVED from '../actions'
import SAVING_FRIENDS from '../actions'
import UPDATING_FRIEND from '../actions'
import FRIEND_UPDATED from '../actions'
import DELETING_FRIEND from '../actions'
import FRIEND_DELETED from '../actions'

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
            return {...state, friends:[...state.friends, ...action.payload]}
    }
}