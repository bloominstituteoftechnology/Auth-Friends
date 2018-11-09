import axios from 'axios';
export const LOADING = 'LOADING';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch({type: GET_FRIENDS, friends: res.data});
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: 'Trouble retreiving friends'});
            })
    } 
}