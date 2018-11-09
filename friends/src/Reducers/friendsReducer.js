import {LOADING, SUCCESS, ERROR} from '../Actions/actionTypes'
import { Object } from 'core-js';


const initialState = {
    // fetchingFriends: false,
    // friendsFetched: false,
    // friendsSaved: false,
    // savingFriends: false,
    // updatingFriend: false,
    // friendUpdated: false,
    // deletingFriend: false,
    // friendDeleted: false,
    // friends: [],
    // error: null
    friends: [],
    loading: false,
    error: null

}

const friendsReducer = (state = initialState, action) =>{
    switch(action.type)
    {       
        case LOADING:
            return Object.assign({}, state, {loading: true})
        case SUCCESS:
            return Object.assign({}, state, {loading: false, friends: action.payload, error: null})
        case ERROR:
            return Object.assign({}, state, {error: true, loading: false})
        default:
            return state
    }

}

export default friendsReducer;