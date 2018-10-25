import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from '../Actions/'
import { ADDING_FRIEND,ADDING_FRIEND_SUCCESS,ADDING_FRIEND_FAILURE } from '../Actions/'

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
            ...state,isFetching:true,
        }
        case FETCHING_FRIENDS_SUCCESS:
        return {
            ...state,friends:action.payload,isFetching:false
        }
        case FETCHING_FRIENDS_FAILURE:
        return {
            ...state,isFetching:false
        }
        case ADDING_FRIEND:
        return {
            ...state
        }
        case ADDING_FRIEND_SUCCESS:
        return {
            ...state,friends:action.payload
        }
        case ADDING_FRIEND_FAILURE:
        return {
            ...state
        }
        default:
        return state
        


    }

  }