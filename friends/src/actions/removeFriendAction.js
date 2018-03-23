import axios from "axios";

export const REMOVE_FRIEND_PENDING = "REMOVE_FRIEND_PENDING";
export const REMOVE_FRIEND_SUCCESS = "REMOVE_FRIEND_SUCCESS";
export const REMOVE_FRIEND_ERROR = "REMOVE_FRIEND_ERROR";

export default id => dispatch => {
  dispatch({ type: REMOVE_FRIEND_PENDING });

  axios
    .delete(`http://localhost:5000/api/friends/${id}`)
    .then(response => {
      console.log(response, id, "response");
      dispatch({ type: REMOVE_FRIEND_SUCCESS, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: REMOVE_FRIEND_ERROR, error: err });
    });
};
