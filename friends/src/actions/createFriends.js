import axios from "axios";

import { ERROR_FRIENDS } from "./actionTypes";
import { fetchFriends } from "./fetchFriends";

export const createFriend = data => {
  console.log(data);
  const friends = axios.post("http://localhost:5000/api/friends/", data);
  return dispatch => {
    friends
      .then(response => {
        dispatch(fetchFriends());
      })
      .catch(err => {
        dispatch({
          type: ERROR_FRIENDS,
          payload: "ERROR Posting friends"
        });
      });
  };
};
