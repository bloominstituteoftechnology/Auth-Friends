// import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from '../actions/fetchingActions';
// import { ADD_FRIEND } from '../actions/addFriendAction';

import * as actionTypes from '../actions/fetchingActions';

const initialState = {
    isFetching: false,
    friends: [],
    error: null
};

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_FRIENDS:
            return { ...state, isFetching: true };
        case actionTypes.FETCHING_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: [...state.friends, ...action.payload],
                isFetching: false
            };
        case actionTypes.FETCHING_FRIENDS_FAILURE:
            return { ...state, isFetching: false, error: action.payload };
        case actionTypes.ADD_FRIEND:
            return {
                ...state,
                friends: [...state.friends, action.payload]
            };
        default:
            return state;
    }
};