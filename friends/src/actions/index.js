import axios from "axios";

export const FETCH_ERROR = "FETCH_ERROR";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const FRIEND_SAVED = "FRIEND_SAVED";
export const SAVING_FRIEND = "SAVING_FRIEND";
export const UPDATING_FRIEND = "UPDATING_FRIEND";
export const FRIEND_UPDATED = "FRIEND_UPDATED";
export const DELETING_FRIEND = "DELETING_FRIEND";
export const FRIEND_DELETED = "FRIEND_DELETED";

export const getFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
      .get("http://localhost:5000/api/friends")
      .then(response => {
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_ERROR });
      });
  };
};

export const postFriend = friend => {
  return dispatch => {
    dispatch({ type: SAVING_FRIEND });
    axios
      .post("http://localhost:5000/api/friends", friend)
      .then(response => {
        dispatch({ type: FRIEND_SAVED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_ERROR, payload: err });
      });
  };
};
