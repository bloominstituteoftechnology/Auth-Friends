import {FETCHING,FETCHED,ERROR,POSTING,POSTED,DELETING,DELETED,UPDATING,UPDATED} from '../actions'

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
        case DELETING:
            return Object.assign({},state,{deletingFriend:true})
        case DELETED:
            return Object.assign({},state,{friendDeleted:true,deletingFriend:false,friends:action.payload})
        case UPDATING:
            return Object.assign({},state,{updatingFriend:true})
        case UPDATED:
            return Object.assign({},state,{updatingFriend:false,friendUpdated:true,friends:action.payload})
        default:
            return state;
    }
}