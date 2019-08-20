import {
    GET_FRIENDS_START,
    GET_FRIENDS_SUCCESS,
    GET_FRIENDS_FAIL,
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
        default :
            return state
    }
}