import { axiosWithAuth } from "../utils/axiosWithAuth";

export const GET_FRIENDS = "GET_FRIENDS";
export const START_FRIENDS = "START_FRIENDS";
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS";
export const FRIENDS_FAIL = "FRIENDS_FAIL";

export const getFriends = () => (dispatch) => {
  dispatch({ type: START_FRIENDS });
  axiosWithAuth()
    .get("/api/friends")
    .then((res) => dispatch({ type: FRIENDS_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: FRIENDS_FAIL, payload: err.message }));
};
