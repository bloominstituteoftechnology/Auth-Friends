import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";

export const fetchFriends = () => dispatch => {
    const URL = 'http://localhost:5000/api/friends';
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get(`${URL}`)
    .then(({ data }) => {
      dispatch({
        type: SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err
      });
    });
};

export const addFriend = friendObj => dispatch => {
  dispatch({ type: ADDING_FRIEND });
  axios
  .post(`http://localhost:5000/api/friends`, friendObj)
    
    .then((data) => {
        console.log(data.data)
      dispatch({ type: FRIEND_ADDED, payload: [...data.data] });
    })
    .catch(err =>{ dispatch({type: FAILURE, payload: err})});
};
