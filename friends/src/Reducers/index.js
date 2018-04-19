import * as ActionTypes from '../Actions/actionTypes';

const initialState = {
  pending: false,
  error: null,
  friends: []
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.PENDING_FRIENDS:
      return Object.assign({}, state, { pending: true });
    case ActionTypes.SUCCESS_FRIENDS:
      return Object.assign({}, state, { friends: [...action.payload], pending: false });
    case ActionTypes.ERROR_FRIENDS:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export default friendsReducer;