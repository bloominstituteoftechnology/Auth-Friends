import axios from 'axios';

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHED_FRIENDS = "FETCHED_FRIENDS";
export const ERROR = "ERROR";



const fetcher = (url) => {
  const request = axios.get(url);
  return (dispatch) => {
    dispatch({type: FETCHING_FRIENDS});
    request.then((data) => {
      dispatch({type: FETCHED_FRIENDS, payload: data});
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err});
    });
  };
};

export default fetcher;
