import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const ADDING_FRIEND = 'ADDING_FRIEND';
export const ADDING_FRIEND_SUCCESS = 'ADDING_FRIEND_SUCCESS';
export const ADDING_FRIEND_FAILURE = 'ADDING_FRIEND_FAILURE';


export const fetchFriends = () => (dispatch) => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends')
    .then((res) => {
      console.log(res);
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};

export const addFriend = (newFriend) => (dispatch) => {
  dispatch({ type: ADDING_FRIEND });
  axios
    .post('http://localhost:5000/api/friends', newFriend)
    .then((res) => {
      dispatch({ type: ADDING_FRIEND_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: ADDING_FRIEND_FAILURE, payload: error });
    });
};
