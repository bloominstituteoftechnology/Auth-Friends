import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";

let url = 'http://localhost:5000/api/friends';

export const getFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(url)
    .then(response => { // use when there is no outside api
      dispatch({
        type: FETCHING_FRIENDS_SUCCESS,
        payload: response.data  // use when there is no outside api
      });
    })
    .catch(err => {
      dispatch({
        type: FETCHING_FRIENDS_FAILURE,
        payload: err
      });
    });
}