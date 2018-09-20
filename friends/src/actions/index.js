import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get("'http://localhost:5000/api/friends")
      .then(response => {
        console.log(response);
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};

export const addFriend = () => {
  return dispatch => {
    dispatch({ type: SAVING });
    axios
      .get("'http://localhost:5000/api/friends")
      .then(response => {
        console.log(response);
        dispatch({ type: SAVED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};

export const updateFriend = () => {
  return dispatch => {
    dispatch({ type: UPDATING });
    axios
      .get("'http://localhost:5000/api/friends")
      .then(response => {
        console.log(response);
        dispatch({ type: UPDATED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};

export const deleteFriend = () => {
  return dispatch => {
    dispatch({ type: DELETING });
    axios
      .get("'http://localhost:5000/api/friends")
      .then(response => {
        console.log(response);
        dispatch({ type: DELETED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ERROR });
      });
  };
};
