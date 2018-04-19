import axios from "axios";

export const PENDING_FRIENDS = "PENDING_FRIENDS"; // fetching
export const SUCCESS_FRIENDS = "SUCCESS_FRIENDS"; // fetched
export const ERROR_FRIENDS = "ERROR_FRIENDS"; // error

export const fetchFriend = () => {
  const friends = axios.get(`http://localhost:5000/api/friends`);
  return dispatch => {
    dispatch({ type: PENDING_FRIENDS });

    friends
      .then(response => {
        dispatch({
          type: SUCCESS_FRIENDS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR_FRIENDS,
          payload: "ERROR fetching friends list"
        });
      });
  };
};

export const createFriend = data => {
  const friends = axios.post(`http://localhost:5000/api/friends`, data);
  return dispatch => {
    dispatch({ type: PENDING_FRIENDS });
    friends
      .then(response => {
        dispatch(fetchFriend());
      })
      .catch(err => {
        dispatch({
          type: ERROR_FRIENDS,
          payload: "ERROR Could not ADD new friend"
        });
      });
  };
};
