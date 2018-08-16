import {FETCHING,FETCHED,ERROR,POSTING,POSTED} from '../actions'

const initialState={
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
export const friendsReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCHING:
            return Object.assign({},state,{fetchingFriends:true})
        case FETCHED:
            return Object.assign({},state,{fetchingFriends:false,friendsFetched:true,friends:action.payload})
        case ERROR:
            return Object.assign({},state,{fetchingFriends:false,friends:action.payload})
        case POSTING:
            return Object.assign({},state,{savingFriends:true,friendsSaved:false})
        case POSTED:
            return Object.assign({},state,{friendsSaved:true,savingFriends:false})
        default:
            return state;
    }
}