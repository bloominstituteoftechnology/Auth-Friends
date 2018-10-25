import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ERROR = 'ERROR';

export const fetch = () => dispatch => {
    dispatch({ type: FETCHING });
    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};

export const update = (newFriend) => dispatch => {
    dispatch({ type: ADDING });
    axios
        .post('http://localhost:5000/api/friends', newFriend)
        .then(response => {
            dispatch({ type: ADDED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        });
};