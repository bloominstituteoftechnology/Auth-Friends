import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const GOT_FRIENDS = 'GOT_FRIENDS';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return dispatch => {
        dispatch({type: GET_FRIENDS});
        axios.get('http://localhost:5000/api/friends')
             .then(res => dispatch({type: GOT_FRIENDS, payload: res.data}))
             .catch(err => dispatch({type: ERROR, payload: err}))
    }
}