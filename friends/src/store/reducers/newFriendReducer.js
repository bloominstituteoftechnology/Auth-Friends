import { ADDING_FRIEND, ADDED_FRIEND, ADD_ERROR } from '../actions';

const initialFriendState = 
    {
        id: '',
        name: '',
        age: '',
        email: '',
    }


    export const newFriendReducer = (state = initialFriendState, action) => {
        switch (action.type) {
            case ADDING_FRIEND:
            return Object.assign({}, state, { savingFriends: true });
            case ADDED_FRIEND:
            return Object.assign({}, state, {
                friends: [...state.friends, ...action.payload],
                savingFriends: false
            });
            case ADD_ERROR:
            return { ...state, error:action.payload }
            default:
            return state;
        }
    }