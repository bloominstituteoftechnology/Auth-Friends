import axios from "axios";

export const FETCHING_FRIENDS = "FETCHING_FRIENDS";
export const FRIENDS_FETCH_SUCCESS = "FRIENDS_FETCH_SUCCESS";
export const FRIENDS_FETCH_FAILURE = "FRIENDS_FETCH_FAILURE";
export const ADDING_FRIEND = "ADDING_FRIEND";
export const FRIEND_ADDED = "FRIEND_ADDED";
export const ADD_FRIEND_ERROR = "ADD_FRIEND_ERROR";

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING_FRIENDS });
    axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            console.log(response);
            dispatch({ type: FRIENDS_FETCH_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FRIENDS_FETCH_FAILURE, payload: error });
        });
    };
    export const addNewFriend = (friend) => dispatch => {
        
        dispatch({ type: ADDING_FRIEND });
      
        axios
            .post("http://localhost:5000/api/friends", friend)
          .then(response => {
              dispatch({ type: FRIEND_ADDED, payload: response.data });
          })
          .catch(err => {
            dispatch({ type: ADD_FRIEND_ERROR, payload: err });
          });
      };