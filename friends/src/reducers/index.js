import { FETCHING, FETCHED, ERROR, SAVING, SAVED } from "./actions";
const initialDate = {
  friends: [],
  fetching: false,
  error: ""
};

export default (friendsReducer = (state = initialState, { type, action }) => {
  switch (type) {
    case FETCHING:
      return { ...state, fetching: true };
    case ERROR:
      return { ...state, error: payload };
    case FETCHED:
      return { ...state, fetching: false };
    case SAVING:
      return { ...state, saving: true };
    case SAVED:
      return { ...state.friends, ...payload };
  }
});
