import * as actionTypes from '../Action '; 

const intialState = {
    friendSelected: {}, 
    showUpdate: false
}

export default singleFriendReducer = (state = intialState, action) =>{
    switch(action.type) {
        case actionTypes.SINGLE_FRIEND: 
        return { ...state, friendSelected: action.payload, showUpdate: false};
        case actionTypes.TOGGLE_FRIEND: 
        return {...state, showUpdate: !state.showUpdate};
        default: 
        return state; 
    }
}; 