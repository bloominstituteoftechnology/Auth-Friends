export const FRIENDS_FETCH = 'FRIENDS_FETCH';
export const FRIENDS_FETCH_FINISHED = 'FRIENDS_FETCH_FINISHED';

const initialState = false;

export const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_FETCH:
      return true;
    case FRIENDS_FETCH_FINISHED:
      return false;
    default:
      return state;
  }
};
