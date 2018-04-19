import { FETCHING, FETCHED, ERROR } from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  friends: [],
  error: null
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      state = initialState;
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        friends: [...state.friends, ...action.payload],
        fetching: false,
        fetched: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching friends"
      });
    default:
      return state;
  }
};

export { friendsReducer };
