import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHING_FRIENDS_SUCCESS = 'FETCHING_FRIENDS_SUCCESS';
export const FETCHING_FRIENDS_FAILURE = 'FETCHING_FRIENDS_FAILURE';

export const ADD = 'ADD';

export const fetchFriends = () => dispatch => {
        dispatch({ type : FETCHING_FRIENDS });
        axios   
            .get('http://localhost:5000/api/friends')
            .then(response => {
                console.log("Response after data fetching : ",response.data);
                dispatch({ type : FETCHING_FRIENDS_SUCCESS, payload : response.data }); 
             })
            .catch(error => {
                console.log(error);
                dispatch({ type : FETCHING_FRIENDS_FAILURE, payload : error }); 
             });
}


export const addFriend = (event, friend) => dispatch => {
    event.preventDefault();
    dispatch({ type : ADD });
    axios
        .post('http://localhost:5000/api/friends', friend)
        .then(response => {
             dispatch({ type : FETCHING_FRIENDS_SUCCESS , payload : response.data })
         })
        .catch(error => {
            console.log(error);
            dispatch({ type : FETCHING_FRIENDS_FAILURE, payload : error });
         });
}