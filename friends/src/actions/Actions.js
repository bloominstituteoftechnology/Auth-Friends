import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';


export const getFriends = () => {
    const friends = axios.get('http://localhost:5000');
    return dispatch => {
        friends
        .then(response => {
            dispatch({ type: GET_FRIENDS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        }); 
    }; 
};