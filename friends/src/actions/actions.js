import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FREINDS_FETCHED = 'FREINDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const FRIENDS_SAVING = 'FRIENDS_SAVING';
export const FRIENDS_UPDATING = 'FRIENDS_UPDATING';
export const FRIENDS_UPDATED = 'FRIENDS_UPDATED';
export const FRIENDS_DELETING = 'FRIENDS_DELETING';
export const FRIENDS_DELETED = 'FRIENDS_DELETED';
export const FRIENDS_ERROR = 'FRIENDS_ERROR';

export const fetchFriends = () => {
    const promise = axios.get('http://localhost:500/api/friends');

    return function(dispatch) {
        dispatch({type: FETCHING_FRIENDS});

        promise.then((response) => {
            console.log(response);
            dispatch({type: FREINDS_FETCHED, payload: response.data})
        })
        .catch(error => {
            dispatch({type: FRIENDS_ERROR, msg: 'Error fetching friends'})
        })
    }
}