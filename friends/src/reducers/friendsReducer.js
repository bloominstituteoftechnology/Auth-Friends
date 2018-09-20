import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from '../actions';
const initialState = {
  friends: [],
  fetchingData: false,
  error: '',
};

export const friendsReducer = (initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...initialState, fetchingData: true };
    case DATA_FETCHED:
      return {
        ...initialState,
        friends: [...initialState.friends, ...action.payload],
        fetchingData: false,
      };
    case FETCH_ERROR:
      return {
        ...initialState,
        error: 'Error fetching data',
      };
    default:
      return initialState;
  }
};