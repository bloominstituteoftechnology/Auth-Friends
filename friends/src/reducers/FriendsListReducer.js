import {GETTING_FRIENDS_START, 
        GETTING_FRIENDS_SUCCESS, 
        GETTING_FRIENDS_FAILURE}
        from '../actions'

const initialState = {
    friends:[],
    fetchingData: false,
    fetchingError: null
}


const friendsListReducer = (state=initialState, action) => {
    switch(action.type) {
        case GETTING_FRIENDS_START:
        return {
            ...state,
            fetchingData: true,
        }

        case GETTING_FRIENDS_SUCCESS:
        return {
            ...state,
            fetchingError: null,
            fetchingData: false,
            friends: action.payload
        }

        case GETTING_FRIENDS_FAILURE:
        return {
            ...state,
            fetchingError: action.payload,
            fetchingData: false

        }
        default:
        return state
    }
}

export default friendsListReducer;