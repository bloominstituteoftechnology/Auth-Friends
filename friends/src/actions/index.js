import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchData = () => dispatch => {
    dispatch({type: FETCHING});
    axios 
        .get('http://localhost:5000/api/friends/')
        .then(response => {
            dispatch({type: SUCCESS, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FAILURE, payload:error})
        });
}