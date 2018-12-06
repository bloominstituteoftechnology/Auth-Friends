import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetch_friends = () => dispatch => {
    dispatch({ type: FETCH_START });
    // console.log('from fetch!', response)
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            // console.log('from fetch friends...', response)
            dispatch({ type: FETCH_SUCCESS, payload: response.data})
            })
        .catch(err => {
            dispatch({ type: FETCH_FAILURE, payload: err })
        });
};