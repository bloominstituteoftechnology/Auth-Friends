import {
    SINGLE_FRIEND,
    TOGGLE_FRIEND
  } from "../actions";

  const initialState = {
    friendSelected: {}, 
    showUpdate: false
  };

  export const singleFriendReducer = (state = initialState, action) =>{
    switch(action.type) {
        case SINGLE_FRIEND: 
        return { ...state, friendSelected: action.payload, showUpdate: false};
        case TOGGLE_FRIEND: 
        return {...state, showUpdate: !state.showUpdate};
        default: 
        return state; 
    }
}; 