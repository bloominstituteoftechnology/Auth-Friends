import axios from "axios";

export const getFriends = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_FRIENDS" });
    axios.get(`http://localhost:5000/api/friends`).then(response => {
        dispatch({ type: "FRIENDS_FETCHED", payload: response.data });
      }).catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

export const addFriend = newFriend => {};

export const getFriend = id => {};
