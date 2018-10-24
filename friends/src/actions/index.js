import axios from "axios";
export const FETCHING = "FETCHING";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";

export const fetchFriends = () => {
  const promise = axios.get("http://localhost:5000/api/friends");
  return function(dispatch) {
    dispatch({type: FETCHING});
    promise
      .then(response => dispatch({type: SUCCESS, payload: response.data}))
      .catch(err => dispatch({type: FAILURE, payload: err}));
  };
};

export default fetchFriends;
