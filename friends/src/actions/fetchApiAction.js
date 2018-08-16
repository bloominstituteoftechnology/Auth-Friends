import axios from "axios";
import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "./types";

const url = "http://localhost:5000/api/friends/";
export const fetchFriendData = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get(url)
      .then(response =>
        dispatch({ type: FETCH_SUCCESS, payload: response.data })
      )
      .catch(error => dispatch({ type: FETCH_FAILURE, payload: error }));
  };
};
