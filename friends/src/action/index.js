import axios from "axios";
export const FETCHING = "FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ERROR = "ERROR";
export const FETCHFRIEND = "FETCHFRIEND";
export const FRIEND_SUCCESS = "FRIEND_SUCCESS";
export const CREATING = "CREATING";
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export const UPDATING = "UPDATING";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const DELETING = "DELETING";
export const DELETE_SUCCESS = "DELETE_SUCCESS";

export const fetchPeeps = () => {
  const promise = axios.get(`http://localhost:5000/api/friends`);
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
        dispatch({ type: FETCH_SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchFriend = () => {
  const promise = axios.get(`http://localhost:5000/api/friends/:id`);
  return dispatch => {
    dispatch({ type: FETCHFRIEND });
    promise
      .then(response => {
        dispatch({ type: FRIEND_SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const createFriend = () => {
  const promise = axios.post(`http://localhost:5000/api/friends`);
  return dispatch => {
    dispatch({ type: CREATING });
    promise
      .then(response => {
        dispatch({ type: CREATE_SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
export const updateFriend = () => {
  const promise = axios.put(`http://localhost:5000/api/friends/`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: UPDATING });
    promise
      .then(response => {
        dispatch({ type: UPDATE_SUCCESS, payload: response.data.results });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteFriend = () => {
  const promise = axios.delete(`http://localhost:5000/api/friends/`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING });
    promise
      .then(({ data }) => {
        dispatch({ type: DELETE_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
