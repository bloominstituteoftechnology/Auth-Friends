import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_FETCHING_ERROR = 'FRIENDS_FETCHING_ERROR';

export const ADDING_FRIEND = 'ADDING_FRIEND';
export const FRIEND_ADDED = 'FRIEND_ADDED';
export const FRIEND_ADDED_ERROR = 'FRIEND_ADDED_ERROR'



export const getFriends = () => {
    return dispatch => {
        dispatch({type: FETCHING_FRIENDS})
        axios.get('http://localhost:5000/api/friends/get')
        .then(response => {
            dispatch({type: FRIENDS_FETCHED, payload: response.data})
        })
        .catch(error => dispatch({type: FRIENDS_FETCHING_ERROR, payload: error}))
    }
}

export const postFriend = friend => {
    return dispatch => {
        dispatch({type: ADDING_FRIEND})
        axios.post('http://localhost:5000/api/friends/create', friend)
        .then(response => dispatch({type: FRIEND_ADDED, payload: response.data}))
        .catch(error => dispatch({type: FRIEND_ADDED_ERROR, payload: error}));
    }
}


