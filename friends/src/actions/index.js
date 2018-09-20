import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const getFriends = () => {
    return dispatch => {
        dispatch ({ type: FETCHING });
        axios
            .get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch ({ type: FETCHED, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: ERROR })
            })
    }
}

export const addFriend = friend => {
    return dispatch => {

    }
}

export const updateFriend = friend => {
    return dispatch => {

     }
}

export const deleteFriend = friend => {
    return dispatch => {

     }
}