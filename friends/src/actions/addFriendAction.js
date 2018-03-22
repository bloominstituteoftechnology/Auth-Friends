import axios from "axios";

export const ADD_FRIEND_SUCCESS = "ADD_FRIEND_SUCCESS";
export const ADD_FRIEND_PENDING = "ADD_FRIEND_PENDING";
export const ADD_FRIEND_ERROR = "ADD_FRIEND_ERROR";

export default newFriendToAdd => dispatch => {
  dispatch({ type: ADD_FRIEND_PENDING });

  axios
    .post("http://localhost:5000/api/friends", newFriendToAdd)
    .then(response => {
      console.log(newFriendToAdd, "adding this friend");
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ADD_FRIEND_ERROR, error: err });
    });
};
