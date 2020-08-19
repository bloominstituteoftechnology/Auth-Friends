import { FETCH_FRIENDS, FETCH_FRIENDS_SUCCESS, ADD_FRIEND, REMOVE_FRIEND, EDIT_FRIEND } from '../actions'

const initialState = {
    friends: [],
    isLoading: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_FRIENDS:
            return{
                ...state,
                isLoading: true,
            }
        case FETCH_FRIENDS_SUCCESS:
            return{
                ...state,
                friends: action.payload,
                // isLoading: false,
            }
        default:
            return state;
    }
}