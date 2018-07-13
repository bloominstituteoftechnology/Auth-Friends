import axios from "axios";
export const FETCH_START = "FETCH_START";
export const FETCH_ERROR = "FETCH_ERROR";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_ERROR = "ADD_FRIEND_ERROR";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const UPDATE_FRIEND_START = "UPDATE_FRIEND_START";
export const UPDATE_FRIEND_SUCCESS = "UPDATE_FRIEND_SUCCESS";
export const UPDATE_FRIEND_ERROR = "UPDATE_FRIEND_ERROR";
export const GO_TO_ADD_FRIEND = 'GO_TO_ADD_FRIEND';
export const GO_HOME = 'GO_TO_FRIEND_LIST';

const url = "http://localhost:5000/api";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${url}/friends/`)
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCH_ERROR });
    });
};

export const updateFriend = (friend) => dispatch => {
  const { id } = friend;
  dispatch({ type: UPDATE_FRIEND_START });
  axios
    .put(`${url}/friends/${id}`, friend)
    .then(response => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_FRIEND_ERROR, payload: 'update' });
    });
};

export const deleteFriend = (id) => dispatch => {
  dispatch({ type: UPDATE_FRIEND_START });
  axios
    .delete(`${url}/friends/${id}`)
    .then(response => {
      dispatch({ type: UPDATE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_FRIEND_ERROR, payload: 'delete'});
    });
};

export const addFriend = (friend) => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios.post(`${url}/friends/`, friend)
    .then(response => {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_FRIEND_ERROR, payload: 'delete'});
    });
};

export const goToAddFriend = () => ({type: GO_TO_ADD_FRIEND});
export const goHome = () => ({type: GO_HOME});
