import * as actionTypes from '../Action ';

const intialState = {
    friends: [], 
    gettingFriends: false, 
    updatingFriends: false,
    creatingFriends: false, 
    deletingFriends: false,
    error: null 
}; 

export const friendsReducer =(state = intialState, action) =>{
    switch(action.type){
        case actionTypes.GETTING_FRIENDS:
        return{ ...state, gettingFriends: true  }
        case actionTypes.GET_FRIENDS:
        return{...state, friends: action.payload, gettingFriends: false}
        case actionTypes.UPDATING_FRIENDS:
        return{...state, updatingFriends: true }
        case actionTypes.CREATING_FRIENDS: 
        return {...state, creatingFriends: true}
        case actionTypes.CREATED_FRIENDS:
        return {...state, friends: action.payload, creatingFriends: false}
        case actionTypes.DELETING_FRIENDS: 
        return{...state, deletingFriends: true }
        case actionTypes.DELETED_FRIENDS: 
        return{...state, friends: action.payload, deletingFriends: false}
        case actionTypes.ERROR:
        return{ 
            ...state, 
            gettingFriends: false, 
            updatingFriends: false, 
            creatingFriends: false, 
            deletingFriends: false, 
            error: action.payload,
         };
         default: 
         return state
    };
}; 
