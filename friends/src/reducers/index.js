import {
    UPDATE_FRIEND_STATE,
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAIL,
    POST_FRIENDS_START,
    POST_FRIENDS_SUCCESS ,
    POST_FRIENDS_FAIL,
    PUT_FRIENDS_START,
    PUT_FRIENDS_SUCCESS,
    PUT_FRIENDS_FAIL,
}
from '../actions'

const initialState = {
    friendsList: [],
    updateFriend: {},
    callingAPI: false,
    error: ''

}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        // @@@@@@@@@@ UPDATE FRIEND STATE @@@@@@@@@@
        case UPDATE_FRIEND_STATE :
            return {
                ...state,
                updateFriend: action.payload
            }

        // @@@@@@@@@@ GET REQUEST @@@@@@@@@@
        case GET_FRIENDS_START :
            return {
                ...state,
                updateFriend: {},
                callingAPI: true,
                error: ''
            }
        case GET_FRIENDS_SUCCESS :
            return {
                ...state,
                friendsList: action.payload,
                callingAPI: false,
                error: ''
            }
        case GET_FRIENDS_FAIL :
            return {
                ...state,
                callingAPI: false,
                error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}`
            }

        // @@@@@@@@@@ POST REQUEST @@@@@@@@@@
        case POST_FRIENDS_START :
            return {
                ...state,
                updateFriend: {},
                callingAPI: true,
                error: ''
            }
        case POST_FRIENDS_SUCCESS :
            return {
                ...state,
                friendsList: action.payload,
                callingAPI: false,
                error: ''
            }
        case POST_FRIENDS_FAIL :
            return {
                ...state,
                callingAPI: false,
                error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}`
            }
            
        // @@@@@@@@@@ PUT REQUEST @@@@@@@@@@
        case PUT_FRIENDS_START :
                return {
                    ...state,
                    updateFriend: {},
                    callingAPI: true,
                    error: ''
                }
        case PUT_FRIENDS_SUCCESS :
            return {
                ...state,
                friendsList: action.payload,
                callingAPI: false,
                error: ''
            }
        case PUT_FRIENDS_FAIL :
            return {
                ...state,
                callingAPI: false,
                error: `${action.payload.status} ${action.payload.statusText} - ${action.payload.data.Error}`
            }
    
        default :
            return state
    }
}