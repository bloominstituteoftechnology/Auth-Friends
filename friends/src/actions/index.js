import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING = "FETCHING";
export const FETCHED = "SUCCESS";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED;";
export const SINGLE_FETCHING = "SINGLE_FETCHING";
export const SINGLE_FETCHED = "SINGLE_FETCHED";

export const fetchFriends = () => {
  const friends = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: FETCHING });
    friends
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCHED, payload: res.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const fetchSingleFriend = id => ({ dispatch }) => {
  const singleFriend = axios.get(`http://localhost:5000/api/friends/${id}`);
  dispatch({ type: SINGLE_FETCHING });
  singleFriend
    .then(res => dispatch({ type: SINGLE_FETCHED, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addFriend = friend => ({ dispatch }) => {
  const newFriend = axios.put("http://localhost:5000/api/friends", friend);
  dispatch({ type: SAVING });
  newFriend
    .then(res => {
      console.log(res.data);
      dispatch({ type: SAVED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const updateFriend = (info, id) => ({ dispatch }) => {
  const updatedFriend = axios.put(
    `http://localhost:5000/api/friends/${id}`,
    info
  );
  dispatch({ type: UPDATING });
  updatedFriend
    .then(res => {
      console.log(res.data);
      dispatch({ type: UPDATED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const deleteFriend = id => ({ dispatch }) => {
  const deleted = axios.delete(`http://localhost:5000/api/friends/${id}`);
  dispatch({ type: DELETING });
  deleted
    .then(res => dispatch({ type: DELETED, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};
