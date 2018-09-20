import axios from "axios";
const URL = "http://localhost:5000/api/friends";

export const FETCHING = "FETCHING_FRIENDS";
export const SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const ERROR = "FETCHING_ERROR";
export const SAVING = "SAVING_FRIEND";
export const SAVED = "SAVING_FRIEND_SUCCESS";

export const getFriendsData = () => {
  return dispatch => {
    console.log("fetching");
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => dispatch({ type: SUCCESS, payload: response.data }))
      .catch(err => dispatch({ type: ERROR }));
  };
};

export const addNewFriend = () => {
  console.log("add new friend action");
  return dispatch => {
    console.log("dispatch");
    dispatch({ type: SAVING });
    axios
      .get(URL)
      .then(response => {
        console.log("got");
        dispatch({ type: SAVED, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR }));
  };
};
