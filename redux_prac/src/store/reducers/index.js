import {FETCH_FRIENDS, POST_FRIENDS, DELETE_FRIENDS, UPDATE_FRIENDS} from '../actions'

const initialState = {
    friends: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_FRIENDS:
            return {
        friends: action.payload
        }
        case POST_FRIENDS:
            return {
        friends: action.payload
        }
        case DELETE_FRIENDS:
            return {
        friends: action.payload
            }
        case UPDATE_FRIENDS:
            return {
        friends: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;

// In the switch statement we are basically saying that if the action.type that it receives is __ then return the action.payload based on that action.type
// Think of action as a object with its keys being type (which is a variable in all caps that we make when we create it) and payload (which is the response.data from /actions)