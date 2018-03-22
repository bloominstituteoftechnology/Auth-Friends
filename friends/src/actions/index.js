import axios from 'axios';


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
            dispatch({ type: ERROR, errorMessage: 'Error Fecthing the data'})
        });

};