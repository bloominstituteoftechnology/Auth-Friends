import axios from "axios";

export const ERROR = "ERROR";
export const FETCHING = "FETCHING";
export const FETCHED = "SUCCESS";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const SINGLE_FETCHING = "SINGLE_FETCHING";
export const SINGLE_FETCHED = "SINGLE_FETCHED";
export const CAN_UPDATE = "CAN_UPDATE";
export const SHOW_FRIEND = "SHOW_FRIEND";

const host = "http://localhost:5000/api/friends";

export const fetchFriends = () => {
  const friends = axios.get(`${host}`);
  return dispatch => {
    dispatch({ type: FETCHING });
    friends
      .then(res => {
        dispatch({ type: FETCHED, payload: res.data });
      })
      .catch(err => dispatch({ type: ERROR, payload: err }));
  };
};

export const fetchSingleFriend = id => dispatch => {
  const singleFriend = axios.get(`${host}/${id}`);
  dispatch({ type: SINGLE_FETCHING });
  singleFriend
    .then(res => dispatch({ type: SINGLE_FETCHED, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const addFriend = friend => dispatch => {
  const newFriend = axios.post(`${host}`, friend);
  dispatch({ type: SAVING });
  newFriend
    .then(res => {
      dispatch({ type: SAVED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const updateFriend = (info, id) => dispatch => {
  const updatedFriend = axios.put(`${host}/${id}`, info);
  dispatch({ type: UPDATING });
  updatedFriend
    .then(res => {
      dispatch({ type: UPDATED, payload: res.data });
    })
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const deleteFriend = id => dispatch => {
  const erase = axios.delete(`${host}/${id}`);
  dispatch({ type: DELETING });
  erase
    .then(res => dispatch({ type: DELETED, payload: res.data }))
    .catch(err => dispatch({ type: ERROR, payload: err }));
};

export const toggleUpdate = () => {
  return {
    type: CAN_UPDATE
  };
};
