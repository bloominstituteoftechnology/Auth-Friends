import axios from "axios";

export const DATA_REQUESTED = "DATA_REQUESTED";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const ERROR_GETTING_DATA = "ERROR_GETTING_DATA";
export const POST_SUCCESS = "POST_SUCCESS";

export const fetchFriends = URL => {
  const promise = axios.get(URL);
  return function(dispatch) {
    dispatch({ type: DATA_REQUESTED });
    promise
      .then(response => {
        console.log(response.data);
        // TODO: Change this next line to point to the friends array when you see the incoming data
        dispatch({ type: FRIENDS_FETCHED, payload: response.data });
      })
      .catch(err => {
        console.log("GET ERROR: ", err);
        dispatch({
          type: ERROR_GETTING_DATA,
          payload: "DATA RETRIEVAL ERROR..."
        });
      });
  };
};

export const addFriend = (URL, newFriend) => {
  const promise = axios.post(URL, newFriend);
  return function(dispatch) {
    dispatch({ type: DATA_REQUESTED });
    promise
      .then(response => {
        console.log(response.data);
        // TODO: Change this next line to point to the friends array when you see the incoming data
        dispatch({ type: POST_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.log("GET ERROR: ", err);
        dispatch({
          type: ERROR_GETTING_DATA,
          payload: "DATA RETRIEVAL ERROR..."
        });
      });
  };
};
