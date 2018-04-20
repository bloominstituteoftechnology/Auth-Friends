import * as AT from '../actions/actionTypes';

const initialState = {
  friends: [],
  pending: false,
  error: null,
};

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case AT.PENDING_FRIENDS:
            return Object.assign({}, state, { 
                pending: true,
             });
        case AT.SUCCESS_FRIENDS:
            return Object.assign({}, state, { 
                pending: false,
                friends: [...action.payload],
            })
        case AT.ERROR_FRIENDS:
            return Object.assign({}, state, { 
                pending: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default friendsReducer;