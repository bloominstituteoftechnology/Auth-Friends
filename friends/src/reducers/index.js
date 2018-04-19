import * as AT from '../actions/actionTypes';

const initialState = {
  pending: false,
  error: null,
  friends: []
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.PENDING_FRIENDS:
      return Object.assign({}, state, { pending: true });
    case AT.SUCCESS_FRIENDS:
    console.log(action.payload);
      return Object.assign({}, state, {
        pending: false,
        error: null,
        friends: [...action.payload]
      });
    case AT.ERROR_FRIENDS:
      return Object.assign({}, state, {
        pending: false,
        error: action.payload
      });
    default:
      return state;
  }
};

export default friendsReducer;