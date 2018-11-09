import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';
export const ADD_FRIEND = 'ADD_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
    return (dispatch) => {
        dispatch({type: LOADING})
        axios.get('http://localhost:5000/api/friends')
            .then( response => {
                dispatch({type: GET_FRIENDS, friends: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, error: 'Trouble loading friends'})
            })
    }
}

export const addFriend = (newFriend) => {
    return (dispatch) => {
        dispatch({type: LOADING})
        axios.post('http://localhost:5000/api/friends', newFriend)
            .then(response => {
                dispatch({type: ADD_FRIEND, friends: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, error: 'Trouble adding friend'})
            })
    }
}

export const updateFriend = (updatedFriend) => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.put(`http://localhost:5000/api/friends/${updatedFriend.id}`, updatedFriend)
            .then(response => {
                dispatch({type: UPDATE_FRIEND, friends: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, error: 'Trouble updating friend'})
            })
    }
}

export const deleteFriend = id => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.delete(`http://localhost:5000/api/friends/${id}`)
            .then(response => {
                dispatch({type: DELETE_FRIEND, friends: response.data})
            })
            .catch(error => {
                dispatch({type: ERROR, error: 'Trouble deleting friend'})
            })
    }
}