import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FRIENDS_FETCHING_SUCCESS = 'FRIENDS_FETCHING_SUCCESS';
export const FRIENDS_FETCHING_ERROR = 'FRIENDS_FETCHING_ERROR';


export const fetchFriends = () => {

    return dispatch => {
        dispatch({ type: 'FETCHING_FRIENDS'})

    axios
    .get('http://localhost:5000')

    .then(response => {
        dispatch({ type: 'FRIENDS_FETCHING_SUCCESS', payload: response.data.friends});
    })

    .catch(error => {
        console.log(error);
        dispatch({ type: 'FRIENDS_FETCHING_ERROR' });
        });
    };
};
