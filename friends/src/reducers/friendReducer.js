import { FETCHING_FRIENDS, FRIENDS_FETCHED, ERROR, SAVING_FRIENDS, FRIENDS_SAVED } from '../actions'





const initialState ={
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

export const friendReducer = (prevState = initialState, action) =>{
    switch(action.type){
        case SAVING_FRIENDS: return { ...prevState, savingFriends: true}
        case FRIENDS_SAVED: return { ...prevState, friends: action.payload, friendsSaved: true} 
        case FETCHING_FRIENDS: return {...prevState, fetchingFriends: true, savingFriends: true}
        case FRIENDS_FETCHED: return {...prevState, friends: action.payload,friendsFetched: true}
        case ERROR: return {...prevState, error: action.payload}

         default: return prevState;
    }
}