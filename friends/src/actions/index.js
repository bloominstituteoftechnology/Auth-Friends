import axios from 'axios';

export const POSTED = 'POSTED';
export const POSTING = 'POSTING';
export const FETCHING = 'FETCHING';
export const FETCHED  = 'FETCHED';
export const ERROR = 'ERROR';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING });

    axios
        .get('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: FETCHED, friends: response.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error Fetching the data'})
        });

};

export const addFriend = () => dispatch => {
    dispatch({ type: POSTING });

    axios
        .post('http://localhost:5000/api/friends')
        .then(response => {
            dispatch({ type: POSTED, friends: response.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error Posting the data'})
        });

};



