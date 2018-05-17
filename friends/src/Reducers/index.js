import actionTypes from '../Actions/actionTypes';

const initialState = {
  pending: false,
  error: null,
  friends: []
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PENDING_FRIENDS:
      return Object.assign({}, state, { pending: true });
    case actionTypes.SUCCESS_FRIENDS:
      return Object.assign({}, state, { friends: [...action.payload], pending: false });
    case actionTypes.ERROR_FRIENDS:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
};

export default friendsReducer;



