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
                dispatch({type: ERROR_MESSAGE, errorMessage: "Uh oh. We couldn't find your friends. Are you sure you have any? O.o "})
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
                dispatch({type: ERROR_MESSAGE, errorMessage: `Unable to add friend. This person just doesn't really like you` })
            })
    }
}