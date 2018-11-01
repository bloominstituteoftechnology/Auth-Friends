import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
// export const ADDING_FRIENDS = "ADDING_FRIENDS";
export const ADDING_FRIENDS_SUCCESS = "ADDING_FRIENDS_SUCCESS";
export const ADDING_FRIENDS_FAILURE = "ADDING_FRIENDS_FAILURE";

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

export const addFriend = friend => dispatch => {
  // dispatch({ type: ADDING_FRIENDS });
axios
 .post(url, friend)
 .then(response => {
   dispatch({ type: ADDING_FRIENDS_SUCCESS, payload: response.data })
 })
 .catch(err => {
  dispatch({
    type: ADDING_FRIENDS_FAILURE,
    payload: err
  });
});
}