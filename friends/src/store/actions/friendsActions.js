// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors
export const FETCHING_FRIEND = 'FETCHING_FRIEND';
export const FRIEND_FETCH_SUCCESS = 'FRIEND_FETCH_SUCCESS';
export const FRIEND_FETCH_ERROR = 'FRIEND_FETCH_ERROR';

export const ADD_FRIEND_START = 'ADD_FRIEND_START';
export const ADD_FRIEND_COMPLETE = 'ADD_FRIEND_COMPLETE';
export const ADD_FRIEND_FAILURE = 'ADD_FRIEND_FAILURE';

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://localhost:5000/api/friends`
// remember that now we have controll over our thunk-based

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING_FRIEND });
  
    axios
      .get(`http://localhost:5000/api/friends`)
      .then(response => {
        // console.log(response);
        dispatch({ type: FRIEND_FETCH_SUCCESS, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FRIEND_FETCH_ERROR });
      })
  };
};

export const addNewFriend = friend => dispatch => {
  dispatch({ type: ADD_FRIEND_START });

  axios
    .post('http://localhost:5000/api/friends', friend)
    .then(response => {
      console.log(response);
        dispatch({ type: ADD_FRIEND_COMPLETE, payload: response.data });
    }).catch(err => {
        dispatch({ type: ADD_FRIEND_FAILURE, payload: err });
    });
}