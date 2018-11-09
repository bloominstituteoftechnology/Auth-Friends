import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const loadFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS })
        axios
            .get(`http://localhost:5000/api/friends`)
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}