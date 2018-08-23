import axios from "axios";

export const PENDING_FRIENDS = "PENDING_FRIENDS";
export const SUCCESS_FRIENDS = "SUCCESS_FRIENDS";
export const ERROR_FRIENDS = "ERROR_FETCHING";

export const getTheData = () => {
  const friends = axios.get("http://localhost:5000/api/friends");
  return dispatch => {
    dispatch({ type: PENDING_FRIENDS });
    friends
      .then(response => {
        console.log(response);
        dispatch({ type: SUCCESS_FRIENDS, payload: [] });
      })
      .catch(err => {
        dispatch({ type: ERROR_FRIENDS, payload: "Error fetching friends" });
      });
  };
};

export const postTheData = (data) => {
    const friends = axios.get("http://localhost:5000/api/friends", data);
    return dispatch => {
      dispatch({ type: PENDING_FRIENDS });
      friends
        .then(response => {
          console.log(response);
          dispatch({ type: SUCCESS_FRIENDS, payload: [] });
        })
        .catch(err => {
          dispatch({ type: ERROR_FRIENDS, payload: "Error posting friends" });
        });
    };
  };
  
