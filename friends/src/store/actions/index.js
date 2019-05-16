import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getFriends = () => dispatch => {
    console.log(`--------------Fetching getFriends()`)
    dispatch ({ type: FETCHING });
    axios
    .get(`http://localhost:5000/api/friends`)
    .then(res => {
        dispatch({ type: SUCCESS, payload: res.data.results });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: FAILURE, payload: err })
    })
}