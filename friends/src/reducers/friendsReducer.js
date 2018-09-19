import { FETCHING_DATA, DATA_FETCHED, FETCH_ERROR } from '../actions';

const initialState = {
  friends: [],
  fetchingData: false,
  error: '',
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, fetchingData: true };
    case DATA_FETCHED:
      return {
        ...state,
        friends: [...state.friends, ...action.payload],
        fetchingData: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    default:
      return state;
  }
};
