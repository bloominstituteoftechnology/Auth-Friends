
//-- Dependencies --------------------------------
import * as actions from './actions.js';

//-- Initial Store State -------------------------
const initialState = {
    fetching: false,
    friends: [],
    error: null,
};

//-- Route Actions -------------------------------
export default function (state = initialState, action){
    switch (action.type) {
        case actions.FETCH_ERROR     : return handleFetchError (state, action);
        case actions.FETCHING        : return handleFetching   (state, action);
        case actions.FRIENDS_RESPONSE: return handleFriendsList(state, action);
        default                      : return                   state         ;
    }
};

//-- Action Handling -----------------------------
function handleFetching(state, action) {
    return {
        ...state,
        fetching: true,
    };
}
function handleFriendsList(state, action) {
    return {
        ...state,
        fetching: false,
        friends: action.friends,
    };
}
function handleFetchError(state, action) {
    return {
        ...state,
        fetching: false,
        error: action.error,
    }
}