
//-- Dependencies --------------------------------
import * as actions from './actions.js';

//-- Initial Store State -------------------------
const initialState = {
    friends: [],
};

//-- Route Actions -------------------------------
export default function (state = initialState, action){
    switch (action.type) {
        case actions.FRIENDS_RESPONSE: return handleFriendsList(state, action);
        default                      : return                   state         ;
    }
};

//-- Action Handling -----------------------------
function handleFriendsList(state, action) {
    return {
        ...state,
        friends: action.friends,
    };
}