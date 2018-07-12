import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED'
export const FRIENDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR'

export function getFriends(url){
  return function(dispatch) {
    dispatch({type:FETCHING_FRIENDS});

  axios
    .get(url)
    .then(({ data }) => {
      dispatch({ type: FRIENDS_FETCHED, payload:data });
    })
    .catch(err => {
      dispatch({ type: FRIENDS_FETCH_ERROR, payload:err });
    });
  };
}