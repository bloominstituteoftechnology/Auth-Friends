import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';
export const MAKING_FRIEND = 'MAKING_FRIEND';
export const NEWFRIEND_SUCCESS = 'NEWFRIEND_SUCCESS';
export const NEWFRIEND_FAILURE = 'NEWFRIEND_FAILURE';






export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends/get');
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        friends.then(response => {
            dispatch({type: FRIENDS_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({type: FRIENDS_FAILURE, payload: error });
        })
    }
}

export const addFriend = friend => {
    const newFriend = axios.post('http://localhost:5000/api/friends/create', friend);
    return dispatch => {
        dispatch({ type: MAKING_FRIEND });
        newFriend.then(({data}) => {
            dispatch({type: NEWFRIEND_SUCCESS, payload: data });
        })
        .catch(error => {
            dispatch({type: NEWFRIEND_FAILURE, payload: error });
        })
}}