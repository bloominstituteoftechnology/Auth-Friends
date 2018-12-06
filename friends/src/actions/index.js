import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIEND_FETCH_SUCCESS = 'FRIEND_FETCH_SUCCESS';
export const FRIEND_FETCH_FAILURE = 'FRIEND_FETCH_FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
const url = 'http://localhost:5000';

export const fetchFriends = () => dispatch => {
  dispatch({type: FETCHING_FRIENDS});
  axios
    .get(`${url}/api/friends/`)
    .then(res => {
      console.log(res);
      dispatch({type: FRIEND_FETCH_SUCCESS, payload: res.data});
    })
    .catch(err => {
      console.log(err);
      dispatch({type: FRIEND_FETCH_FAILURE});
    });
};

export const addFriend = friend => {
  // dispatch({type: ADD_FRIEND})
  // //do I need a dispatch here?
  // or do I just add the friend via axios and then fetch friends?
  axios
    .post(`${url}/api/friends`)
    .then(res => {
      console.log('in then');
      fetchFriends();
    }) // if successfull, fetch friends
    .catch(err => console.log());
};
