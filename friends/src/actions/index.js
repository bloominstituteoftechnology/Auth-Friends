import axios from 'axios';

export const FETCH_FRIEND = 'FETCH_FRIEND';
export const FETCHED = 'FETCHED';
export const SAVE_FRIEND = 'SAVE_FRIEND';
export const SAVED = 'SAVED';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const UPDATED = 'UPDATED';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETED = 'DELETED'
export const ERROR = 'ERROR';

export const fetchingFriend = () => {
    return dispatch => {
        dispatch({
            type: FETCH_FRIEND
        })
        axios
            .get('http://localhost:5000/api/friends')
            .then(response => {
                dispatch({
                    type: FETCHED,
                    payload: response.data.results
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: 'you have no friends'
                })
            })
    };
};