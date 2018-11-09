import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCHED_FRIENDS = 'FETCHED_FRIENDS';
export const SAVING_FRIENDS = 'SAVING_FRIENDS';
export const FRIENDS_SAVED = 'FRIENDS_SAVED';
export const ERROR = 'ERROR';

export const fetchFriends = friend => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS });
        axios
            .get('http://localhost:5000/api/friends')
            .then(response => {
                dispatch({
                    type: FETCHED_FRIENDS,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: 'Friends List did not load' })
            })
    }
};