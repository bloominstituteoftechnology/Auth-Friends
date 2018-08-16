import { FETCHING, IS_FETCHED, ADDING, IS_ADDED, DELETING, IS_DELETED, UPDATING, IS_UPDATED, ERROR } from '../actions';

const initialState = {
  friends: [],
  fetching: false,
  isFetched: false,
  adding: false,
  isAdded: false,
  updating: false,
  isUpdated: false,
  deleting: false,
  isDeleted: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case IS_FETCHED:
      return { ...state, fetching: false, isFetched: true };
    case ADDING:
      return { ...state, isFetched: false, adding: true };
    case IS_ADDED:
      return { ...state, adding: false, isAdded: true, friends: action.friends };
    case DELETING:
      return { ...state, isFetched: false, deleting: true };
    case IS_DELETED:
      return { ...state, deleting: false, isDeleted: true, friends: action.friends };
    case UPDATING:
      return { ...state, isFetched: false, updating: true };
    case IS_UPDATED:
      return { ...state, updating: false, isUpdated: true };
    case ERROR:
      return { ...state, isFetched: false, error: action.error };
    default:
      return state;
  }
}