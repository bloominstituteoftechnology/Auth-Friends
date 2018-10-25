import axios from 'axios';

export const FETCHING_FRIENDS= 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';
export const CREATING_FRIENDS="CREATING_FRIENDS"; 
export const CREATED_FRIENDS="CREATED_FRIENDS"; 
export const SINGLE_FRIEND="SINGLE_FRIEND"; 
export const TOGGLE_FRIEND="TOGGLE_FRIEND"; 
export const ERROR ="ERROR"; 

export const fetchfriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS });
  axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_FRIENDS_FAILURE, payload: error });
    });
};


export const createFriends = friend =>{
    const newFriend = axios.post(`http://localhost:5000/api/friends`, friend); 
    return dispatch => {
        dispatch({ type: CREATING_FRIENDS}); 
        newFriend
        .then(({ data }) => {
            dispatch({ type: CREATED_FRIENDS, payload: data}); 
        })
        .catch(err =>{
            dispatch({type: ERROR, payload: err}); 
        })
    };
}; 

export const toggleShowUpdate = () => {
    return{
        type: TOGGLE_FRIEND
    };
}; 

export const updateSingleFriend = friend => {
    return {
        type: SINGLE_FRIEND, 
        payload: friend 
    }; 
};