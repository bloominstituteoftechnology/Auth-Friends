import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS'
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS'
export const FETCH_FRIENDS_FAILURE = 'FETCH_FRIENDS_FAILURE'

export const DELETE_FRIENDS = 'DELETE_FRIENDS'
export const DELETE_FRIENDS_SUCCESS = 'DELETE_FRIENDS_SUCCESS'
export const DELETE_FRIENDS_FAILURE = 'DELETE_FRIENDS_FAILURE'

export const ADD_FRIENDS = 'ADD_FRIENDS'
export const ADD_FRIENDS_SUCCESS = 'ADD_FRIENDS_SUCCESS'
export const ADD_FRIENDS_FAILURE = 'ADD_FRIENDS_FAILURE'

const url = `http://localhost:5000/api/friends`

export const fetchFriends = () => dispatch => {
    dispatch ({ type: FETCH_FRIENDS });

    axios 
        .get(url)
        .then(response => {
            dispatch({ type: FETCH_FRIENDS_SUCCESS , payload: response.data})
        })
        .catch(error => {
            dispatch ({ type: FETCH_FRIENDS_FAILURE, payload: error})
        });
}


export const deleteFriends = id => dispatch => {
    dispatch ({ type: DELETE_FRIENDS });


    axios 
        .delete(`${url}/${id}`)
        .then ( response => {
            dispatch({ type: DELETE_FRIENDS_SUCCESS, payload: response.data})
        })
        .catch (error => {
            dispatch ({ type: DELETE_FRIENDS_FAILURE, payload: error})
        })
}

export const addFriends = friend => dispatch => {
    dispatch ({ type: ADD_FRIENDS });
    axios   
        .post(url,friend)
        .then (response => {
            dispatch ({ type: ADD_FRIENDS_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch ({ type: ADD_FRIENDS_FAILURE, payload: error})
        })
}