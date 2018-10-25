import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS'
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE'

export const fetchFriends = () => dispatch => {
    dispatch ({ type: FETCH_FRIENDS });

    axios 
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            dispatch({ type: FETCH_FRIENDS_SUCCESS , payload: response.data})
        })
        .catch(error => {
            dispatch ({ type: FETCH_FRIENDS_FAILURE, payload: error})
        });
}