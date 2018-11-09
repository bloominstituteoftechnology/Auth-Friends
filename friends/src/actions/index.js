import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return (dispatch => {
        dispatch({type: LOADING})
        axios.get(`http://localhost:5000/api/friends`)
        .then(response => {
            dispatch({type: GET_FRIENDS, friends: friends.data})
        })
        .catch(err => {
            dispatch({type: ERROR, errorMessage: "Tommy are you sure you have friends"})
        })

    })

}