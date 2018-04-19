import axios from "axios";

export const FETCHING = "FETCHING";
export const ERROR = "ERROR";
export const FETCHED = "FETCHED";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";

export const getFriends = () => {
  const promise = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: FETCHING });

    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ TYPE: ERROR, payload: "Error occured" });
      });
  };
};

export const addFriend = data => {
  const promise = axios.post("http://localhost:5000/api/friends", data);
  return dispatch => {
    dispatch({ type: SAVING });

    promise
      .then(response => {
        dispatch({ type: SAVED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: "error occured while posting" });
      });
  };
};

export const deleteFriend = id => {
  const promise = axios.delete(`http://localhost:5000/api/friends/${id}`);
  return dispatch => {
    dispatch({ type: DELETING });

    promise
      .then(response => {
        dispatch({ type: DELETED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: "Error occured while deleting" });
      });
  };
};
