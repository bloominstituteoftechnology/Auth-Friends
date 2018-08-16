import { SAVE_FRIEND, SAVE_SUCCESS, SAVE_FAILURE } from '../actions';

initialState = {
    savingFriends: false,
    friendsSaved: false,
    friends: [],
    errors: null
}

export default (state= initialState, action) => {
    switch(action.type) {
        case SAVE_FRIEND: 
            return Object.assign({}, state, {
                savingFriends: true
            })
        case SAVE_SUCCESS: 
            return Object.assign({}, state, {
                savingFriends: false,
                friendsSaved: true,
                friends: [...state.friends, action.payload]
            })
        case SAVE_FAILURE:
            return Object.assign({}, state, {
                savingFriends: false,
                friendsSaved: false,
                errors: [...state.errors, action.payload]
            })
        default:
            return state
    }
}