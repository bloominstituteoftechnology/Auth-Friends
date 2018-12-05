import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED;";

export const fetchFriends = () => {
  const friends = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: FETCHING });
    friends
      .then(res => {
        console.log(res.data);
        dispatch({ type: SUCCESS, payload: res.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const addFriend = friend => ({ dispatch }) => {
  const link = axios.put;
  dispatch({ type: SAVING });
};
