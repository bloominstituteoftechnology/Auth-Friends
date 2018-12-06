
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            console.log(res);
            dispatch({ type: FETCHING_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCHING_FAILURE, payload: err})
        });
}