import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const GET_FRIENDS = "GET_FRIENDS";

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: LOADING})
        axios.get('http://localhost:5000/api/friends')
            .then( response => {
                dispatch({type: GET_FRIENDS, friends: response.data })
            })
            .catch( err => {
                dispatch({type: ERROR_MESSAGE, errorMessage: "It appears we are unable to locate your friends. Please try again"})
            })
    }
}

export const addFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({type: LOADING})
        axios.post('http://localhost:5000/api/friends', newFriend)
            .then( response => {
                dispatch({type: GET_FRIENDS, friends: response.data })
            })
            .catch( err=> {
                dispatch({type: ERROR_MESSAGE, errorMessage: `We are unable to add your friend. Please try again.` })
            })
    }
}