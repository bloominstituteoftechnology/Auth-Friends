import axios from 'axios';

export const PENDING = 'PENDING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';


export const fetchFriends = () => {
    const promise = axios.get('http://localhost:5000/api/friends')
    return dispatch => {
        dispatch({ type: PENDING })
        promise.then(response => {
            console.log(response);
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const addFriend = friend => {
    const promise = axios.post('http://localhost:5000/api/friends', friend)
    return dispatch => {
        dispatch({ type: PENDING })
        promise.then(response => {
            console.log(response);
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const updateFriend = friend => {
    const promise = axios.put(`http://localhost:5000/api/friends/${friend.id}`, friend)
    return dispatch => {
        dispatch({ type: PENDING })
        promise.then(response => {
            console.log(response);
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const deleteFriend = friendID => {
    const promise = axios.delete(`http://localhost:5000/api/friends/${friendID}`)
    return dispatch => {
        dispatch({ type: PENDING })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({ 
                type: ERROR,
                payload: err
            })
        })
    }
}