import * as Types from '../actions/actionTypes';

const initialState = {
  pending: false,
  error: null,
  friends: []
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.PENDING:
      return { ...state, pending: true };
    case Types.SUCCESS:
      return { ...state,
        pending: false,
        error: null,
        friends: [...action.payload]
      };
    case Types.ERROR:
      return { ...state,
        pending: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default friendsReducer;
