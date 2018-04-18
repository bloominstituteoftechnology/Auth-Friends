import axios from 'axios';

export const FETCH_BEGIN = 'FETCH_BEGIN';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const fetchFriends = () => {
    const promise = axios.get(`http://localhost:5000/api/friends`);
    return dispatch => {
        dispatch({ type: FETCH_BEGIN});
        promise
            .then(res => {
                dispatch({ type: FETCH_SUCCESS, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: FETCH_ERROR, payload: err });
            });
    };
};