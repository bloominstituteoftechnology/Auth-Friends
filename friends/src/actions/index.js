import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

//Fetch friends
export const fetchFriends = () => {
    const promise = axios.get(`http://localhost:5000/api/friends`);
    return dispatch => {
        dispatch({ type: FETCH_START });
        promise 
            .then(response => {
                dispatch({ type: FETCH_SUCCESS, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_ERROR, payload: err });
            });
        };
    };    

//Add friends
export const addFriends = data => {
    const promise = axios.post(`http://localhost:5000/api/friends`, data);
    return dispatch => {
        // dispatch({ type: FETCH_START });
        promise 
            .then(response => {
                dispatch({ type: FETCH_SUCCESS, payload: response.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_ERROR, payload: err });
            });
        };
    };            