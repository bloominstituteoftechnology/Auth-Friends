import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_FAILURE = "FETCHING_FRIENDS_FAILURE";
export const ADDING_FRIENDS_SUCCESS = "ADDING_FRIENDS_SUCCESS";
export const ADDING_FRIENDS_FAILURE = "ADDING_FRIENDS_FAILURE";
export const DELETING_FRIENDS_SUCCESS = "DELETING_FRIENDS_SUCCESS";
export const DELETING_FRIENDS_FAILURE = "DELETING_FRIENDS_FAILURE";
export const UPDATING_FRIENDS_SUCCESS = "UPDATING_FRIENDS_SUCCESS";
export const UPDATING_FRIENDS_FAILURE = "UPDATING_FRIENDS_FAILURE";
export const TOGGLE_FRIENDS_SUCCESS = "TOGGLE_FRIENDS_SUCCESS";

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

export const deleteFriend = id => dispatch => {
axios
 .delete(`${url}/${id}`)
 .then(response => {
   dispatch({ type: DELETING_FRIENDS_SUCCESS, payload: id })
 })
 .catch(err => {
  dispatch({
    type: DELETING_FRIENDS_FAILURE,
    payload: err
  });
});
}

// export const updateFriend = friend => {
//   return {
//     type: UPDATING_FRIENDS_SUCCESS,
//     payload: friend
//   }
// }

export const toggleFriend = id => {
  return {
    type: TOGGLE_FRIENDS_SUCCESS,
    payload: id
  }
}