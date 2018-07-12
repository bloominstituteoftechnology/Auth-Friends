import axios from "axios";
export const GET_FRIENDS = "GET_FRIENDS";
export const GOT_FRIENDS = "GOT_FRIENDS";
export const ERROR = "ERROR";

export const getFriends = URL => {
  return function(dispatch) {
    dispatch({ type: GET_FRIENDS });
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({ type: GOT_FRIENDS, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};
