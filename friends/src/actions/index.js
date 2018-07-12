const axios = require("axios");

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const fetch = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING });
    axios
      .get("https://localhost:5000/api/friends")
      .then(function(response) {
        // handle success
        dispatch({ type: FETCHED, payload: response });
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        dispatch({ type: ERROR, payload: error });
        console.log(error);
      });
  };
};
