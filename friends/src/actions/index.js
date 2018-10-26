import axios from 'axios';


export const ERROR = 'ERROR';
export const GETTING_FRIENDS = 'GETTING_FRIENDS';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const CREATING_FRIEND = 'CREATING_FRIEND';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';

export const getFriends = () => dispatch => {
    dispatch( {type: GETTING_FRIENDS});
    axios
    .get('http://localhost:5000/api/friends')
    .then(response => {
        dispatch({ type: FRIENDS_SUCCESS, payload: response.data});
        })
    .catch(error => {
        dispatch({ type: ERROR, payload: error});
        })
}


export const createFriend = friend => dispatch => {
    dispatch( {type: CREATING_FRIEND});
    axios
    .post('http://localhost:5000/api/friends', friend)
    .then(({ data }) => {
        dispatch({ type: CREATE_SUCCESS, payload: data });
        })
    .catch(error => {
        dispatch({ type: ERROR, payload: error});
        })
}
