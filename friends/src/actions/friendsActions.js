import axios from 'axios';
export const LOADING = 'LOADING';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios.get('http://localhost:5000/api/friends')
    } 
}