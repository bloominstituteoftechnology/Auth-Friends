import {LOADING, GET_FRIENDS, ERROR} from '../actions/actions.js';
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
}
 const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case LOADING:
            return Object.assign({}, state, {fetchingFriends: true})
        case GET_FRIENDS:
            return Object.assign({}, state, {fetchingFriends: false, error: '', friends: action.friends})
        case ERROR:
            return Object.assign({}, state, {fetchingFriends: false, error: action.errorMessage})
        default:
            return state
    }
}
 export default rootReducer; 