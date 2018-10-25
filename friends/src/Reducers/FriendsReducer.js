import { FETCHING_FRIENDS } from '../Actions/'
import { FETCHING_FRIENDS_SUCCESS }from '../Actions/'
import { FETCHING_FRIENDS_FAILURE } from '../Actions/'


const InitialState = {
    fetchingFriends: false,
    friendsFetched: false,
    friendsSaved: false,
    savingFriends: false,
    updatingFriend: false,
    friendUpdated: false,
    deletingFriend: false,
    friendDeleted: false,
    friends: [],
    error: null,
    isFetching:false,

  }


  export const friendsReducer = (state=InitialState,action) =>{

    switch(action.type){

        case FETCHING_FRIENDS:
        return {
            ...state,friends:action.payload
        }

        default:
        return state
    }

  }