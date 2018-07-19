import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCH_SUCCESS = 'FRIENDS_FETCH_SUCCESS';
export const FRINDS_FETCH_ERROR = 'FRIENDS_FETCH_ERROR';

export const fetchFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        promise
            .then(response => {
                dispatch({ type: FRIEINDS_FETCH_SUCCESS, payload: response.data.message });

            })
            .catch(err => {
                dispatch({ type: FRIENDS_FETCH_ERROR })
            })
    }
}