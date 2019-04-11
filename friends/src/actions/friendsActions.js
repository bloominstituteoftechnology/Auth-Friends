import axios from 'axios';
export const LOADING = 'LOADING';
export const GET_FRIENDS = 'GET_FRIENDS';
export const ERROR = 'ERROR';

const apiRoute = 'http://localhost:5000/api/friends'

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios.get(apiRoute)
            .then(res => {
                dispatch({type: GET_FRIENDS, friends: res.data});
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: 'Trouble retrieving friends'});
            })
    } 
}

export const addFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({type: LOADING});
        axios.post(apiRoute, newFriend)
            .then(res => {
                dispatch({type: GET_FRIENDS, friends: res.data});
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: 'Trouble retrieving friends'});
            })
    }
}