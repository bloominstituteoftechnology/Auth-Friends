import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING = 'ERROR_FETCHING';

export const fetchFriends = URL => {
    const promise = axios.get(URL);
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        promise
            .then(response => {
                dispatch({ type: FRIENDS_FETCHED, payload: response.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: ERROR_FETCHING, payload: err})
            })
    }
}