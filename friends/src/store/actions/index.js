import axios from 'axios';

export const FETCH_FRIEND_START = 'FETCH_FRIEND_START';
export const FETCH_FRIEND_SUCCESS = 'FETCH_FRIEND_SUCCESS';
export const FETCH_FRIEND_FAILURE = 'FETCH_FRIEND_FAILURE';

export const fetchFriend = () => dispatch => {
    dispatch({ type: FETCH_FRIEND_START });
    axios
        .get('http://localhost:5000/friends')
        .then(response => {
            dispatch({ type: FETCH_FRIEND_SUCCESS, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: FETCH_FRIEND_FAILURE, payload: err })
        });
};

export const addFriend = friend => {
    const newFriend =
    axios
    .post 
}