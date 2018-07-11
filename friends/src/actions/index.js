import axios from 'axios';

export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FETCH_FAILED = 'FETCH_FAILED'
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';

export function fetchFriends() {
    return (dispatch) => {
        dispatch({type: FETCH_FRIENDS})
        axios.get('http://localhost:5000/api/friends')
        .then(({data}) => {
            dispatch({type: FRIENDS_FETCHED, payload: data.results})
        })
        .catch(err => {
            dispatch({type: FETCH_FAILED, error: err})
        })
    }
}