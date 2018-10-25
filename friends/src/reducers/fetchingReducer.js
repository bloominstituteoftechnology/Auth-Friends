import { FETCHING_FRIENDS, FETCHING_FRIENDS_SUCCESS, FETCHING_FRIENDS_FAILURE } from '../actions/fetchingActions';

const initialState = {
    isFetching: false,
    friends: [],
    error: null
};

export const fetchReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FETCHING_FRIENDS:
            return { ...state, isFetching: true };
        case FETCHING_FRIENDS_SUCCESS:
            return { 
                ...state,
                friends: [...state.friends, ...action.payload ],
                isFetching: false
            };
        case FETCHING_FRIENDS_FAILURE:
            return { ...state, isFetching: false, error: action.payload };
        default:
            return state;
    };
};