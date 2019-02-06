import axios from 'axios';

export const SUCCESS = "SUCCESS";
export const FAILURE = "FAILURE";
export const LOADING = "LOADING";

export function fetchFriends() {
    return dispatch => {
        dispatch({ type: LOADING })
        axios
            .get('http://localhost:5000/friends')
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data.results
                });
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: err
                })
            })
    }
}