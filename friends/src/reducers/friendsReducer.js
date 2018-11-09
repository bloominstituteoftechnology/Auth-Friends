import {LOADING, GET_FRIENDS, ERROR } from "../Actions/friendsActions" 

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

export default (state=initialState, action ) => {
    switch(action.type){
        case LOADING:
            return {...state, fetchingFriends:true} 
        case GET_FRIENDS:
            return Object.assign({}, state, {
                friends: action.friends, 
                fetchingFriends:false,
                friendsFetched: true,
            })
        case ERROR: 
            return Object.assign({}, state, {
                error: action.errorMessage, 
                fetchingFriends: false,
            })
    }
}