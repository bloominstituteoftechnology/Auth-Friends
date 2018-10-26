import axios from 'axios';


export const ERROR = 'ERROR';
export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';

export const getFriends = () => {
    const friends = axios.get('http://localhost:5000/api/friends');
    return dispatch => {
        dispatch({ type: GETTING_FRIENDS });
        friends
        .then(response => {
            dispatch({ type: FRIENDS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error});
        })
    }
}
