import { FETCHING, FETCHED, POSTING, POSTED, ERROR } from "../actions";

const initialState = {
  fetching: false,
  fetched: false,
  posting: false,
  posted: false,
  friends: [],
  error: null
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        friends: [...state.friends, ...action.payload],
        fetching: false,
        fetched: true
      });
    case POSTING:
      return Object.assign({}, state, { posting: true });
    case POSTED:
      return Object.assign({}, state, {
        friends: [...action.payload],
        posting: false,
        posted: true
      });
    case ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching or posting friends"
      });
    default:
      return state;
  }
};

export { friendsReducer };
