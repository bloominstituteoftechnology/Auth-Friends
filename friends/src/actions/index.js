import axios from 'axios'; // import axios package

export const FETCHING = 'FETCHING'; // declare action type variables and export
export const FETCHED  = 'FETCHED';
export const ERROR = 'ERROR';

export const getFriends = () => dispatch => {
    dispatch({ type: FETCHING });

    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({ type: FETCHED, friends: res.data})
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching the data'})
        });

};