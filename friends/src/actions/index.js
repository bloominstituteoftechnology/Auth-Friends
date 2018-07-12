import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const fetchFriends = URL => {
    const promise = axios.get(URL);
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        promise
        .then(({ data }) => {
            console.log(data);
            dispatch({ type: FRIENDS_FETCHED, payload: data });
        })
        .catch(err => {
            dispatch({
                type: ERROR_FETCHING_FRIENDS,
                payload: err
            })
        })
    }
}