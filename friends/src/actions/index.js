import axios from "axios";
export const IS_FETCHING = "IS_FETCHING";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const ERROR_FETCHING_FRIENDS = "ERROR_FETCHING_FRIENDS";
export const IS_SAVING = " IS_SAVING";
export const FRIENDS_SAVED = "FRIENDS_SAVED";
export const ERROR_SAVING_FRIENDS = "ERROR_SAVING_FRIENDS";

export const getFriends = () => {
  const friends = axios.get("http://localhost:5000/api/friends/get");
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    friends
      .then(res => {
        dispatch({ type: FRIENDS_FETCHED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_FRIENDS, payloard: err });
      });
  };
};

export const saveFriend = newFriend => {
  const friends = axios.post(
    "http://localhost:5000/api/friends/create",
    newFriend
  );
  return dispatch => {
    dispatch({ type: IS_SAVING });
    friends
      .then(res => {
        dispatch({ type: FRIENDS_SAVED });
      })
      .catch(err => {
        dispatch({ type: ERROR_SAVING_FRIENDS, payloard: err });
      });
  };
};
