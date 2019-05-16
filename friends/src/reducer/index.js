import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE} from '../actions';

const initialState = {
    loggingIn: false,
    fetchingFriends: false,
    friends: [],
    updatingFriend: false,
    savingFriends: false,
    deletingFriend: false,
    error: null
}


//friends: [
//     {
//         id:
//         name:
//         age:
//         email:
//     }
// ]

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                
            }
        default:
        return state;
    }
}

export default rootReducer;