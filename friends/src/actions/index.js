import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
// export const ADD_FRIEND = "ADD_FRIEND";

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios.get("https//localhost:5000/api/friends").then(({ data }) => {
    console.log(data);
    dispatch({
      payload: data.results
    });
  });
};
