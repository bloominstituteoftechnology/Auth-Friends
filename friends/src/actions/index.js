import axios from 'axios';
export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS_FETCHING_FRIENDS = 'SUCCESS_FETCHING_FRIENDS';
export const POSTING_FRIEND = 'POSTING_FRIEND';
export const SUCCESS_POSTING_FRIEND ='SUCCESS_POSTING_FRIENDS';
export const ERROR_POSTING_FRIEND = 'ERROR_POSTING_FRIEND';
export const ERROR_FETCHING_FRIENDS = 'ERROR_FETCHING_FRIENDS';

export const fetchFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        friends 
            .then(response => {
                console.log(response);
                dispatch({ type: SUCCESS_FETCHING_FRIENDS, payload: []});
            })
            .catch(err => {
                dispatch({ type: ERROR_FETCHING_FRIENDS, payload: 'ERROR FETCHING FRIENDS' });
            });
    }
}