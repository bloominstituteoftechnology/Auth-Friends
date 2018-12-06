import axios from "axios";

export const FETCHING_FRIEND_START = "FETCHING_FRIEND_START";
export const FETCHING_FRIEND_SUCCESS = "FETCHING_FRIEND_SUCCESS";
export const FETCHING_FRIEND_FAILURE = "FETCHING_FRIEND_FAILURE";

export const ADD_FRIEND_START = "ADD_FRIEND_START";
export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_FAILURE = "ADD_FRIEND_FAILURE";

export const DELETE_FRIEND_START = "DELETE_FRIEND_START";
export const DELETE_FRIEND_SUCCESS = "DELETE_FRIEND_SUCCESS";
export const DELETE_FRIEND_FAILURE = "DELETE_FRIEND_FAILURE";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIEND_START });
  axios
    .get("http://localhost:5000/friends")
    .then(response => {
      console.log(response);
      dispatch({
        type: FETCHING_FRIEND_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: FETCHING_FRIEND_FAILURE,
        payload: error
      })
    );
};

export const addFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });
  axios
    .post("http://localhost:5000/friends", friend)
    .then(response => {
      dispatch({
        type: ADD_FRIEND_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: ADD_FRIEND_FAILURE,
        payload: error
      })
    );
};

export const deleteFriend = id => dispatch => {
  dispatch({ type: DELETE_FRIEND_START });
  axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_FRIEND_SUCCESS,
        payload: response.data
      });
    })
    .catch(error =>
      dispatch({
        type: DELETE_FRIEND_FAILURE,
        payload: error
      })
    );
};
