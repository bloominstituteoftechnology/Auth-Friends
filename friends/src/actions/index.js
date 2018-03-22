import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const oneAct = () => dispatch => {
  dispatch({ type: FETCHING });

  axios.get("http://localhost:5000").then(response => {
    dispatch({
      type: FETCHED,
      friends: response.data.results
    }).catch({ error: ERROR, errorMsg: "Error fetching data.." });
  });
};
