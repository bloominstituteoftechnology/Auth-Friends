import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const POSTING_FRIEND = 'POSTING_FRIEND';
export const POST_FRIEND = 'POST_FRIEND';
export const ERROR_POSTING_FRIEND = 'ERROR_POSTING_FRIENDS';

const URL = "http://localhost:5000/api/friends";

export const fetchFriends = () => {
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

export const postFriend = (friendObj) => {
    const promise = axios.post(URL, friendObj);
    return dispatch => {
        dispatch({ type: POSTING_FRIEND });
        promise
        .then(({ data }) => {
            dispatch({type: POST_FRIEND, payload: data })
        })
        .catch(err => {
            dispatch({type: ERROR_POSTING_FRIEND,  payload: err});
        });
    }
}