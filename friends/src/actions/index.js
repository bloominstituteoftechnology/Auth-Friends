import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCHED = "FRIENDS_FETCHED";
export const ERROR_FETCHING_FRIENDS = "ERROR_FETCHING_FRIENDS";

export const fetchChars = URL => {
  const promise = axios.get(URL);
  return function(dispatch) {
    dispatch({ type: FETCHING_FRIENDS });
    promise
      .then(response => {
        console.log(response);
        // TODO: Change this next line to point to the friends array when you see the incoming data
        dispatch({ type: FRIENDS_FETCHED, payload: response });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING_FRIENDS,
          payload: "ERROR FETCHING CHARACTERS..."
        });
      });
  };
};
