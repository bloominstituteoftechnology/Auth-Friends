import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ADDING = "ADDING";
export const DELETE = "DELETE";
export const EDITING = "EDITING";
export const EDITED = "EDITED";
// export const ADDED = "ADDED";

const URL = "http://localhost:5000/api/Friends";

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(URL)
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(ERROR => {
        dispatch({ type: ERROR, payload: ERROR });
      });
  };
};

export const saveFriends = friend => {
  return dispatch => {
    dispatch({ type: ADDING });
    axios
      .post(URL, friend)
      .then(() => {
        dispatch(fetchFriends());
      })
      .catch(ERROR => {
        dispatch({ type: ERROR, payload: ERROR });
      });
  };
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE });
  axios
    .delete(`${URL}/${id}`) //
    .then(() => {
      dispatch(fetchFriends());
    })
    .catch(ERROR => {
      dispatch({ type: ERROR, payload: ERROR });
    });
};

export const editForm = id => {
  return {
    type: EDITING,
    payload: id
  };
};
export const editFriend = updated => dispatch => {
  console.log(updated, "id.....");
  dispatch({ type: EDITED });
  axios
    .put(`${URL}/${updated.id}`, updated)
    .then(() => {
      dispatch(fetchFriends());
    })
    .catch(ERROR => {
      dispatch({ type: ERROR, payload: ERROR });
    });
};
