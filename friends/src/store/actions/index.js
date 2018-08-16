import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const FRIEND_UPDATED = 'FRIEND_UPDATED';
export const DELETING_FRIEND = 'DELETING_FRIEND';
export const FRIEND_DELETED = 'FRIEND_DELETED';
export const ERROR = 'ERROR';

export const fetchFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({type: FETCHING_FRIENDS});
        promise
            .then(response => {
                dispatch({type: FRIENDS_FETCHED, payload: response.data});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: ERROR, payload: err})
            })
    }
}

export const addFriend = (name, age, email) => {
    const promise = axios.post('http://localhost:5000/api/friends', {name: name, age: age, email: email});
    return dispatch => {
        dispatch({type: SAVING_FRIENDS});
        promise
            .then(response => {
                dispatch({type: FRIENDS_SAVED, payload: response.data})
            })
            .catch(err => {
                console.log(err);
                dispatch({type: ERROR, payload: err})
            })
    }
}