import axios from 'axios';

export const UPDATING = 'UPDATING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_FAILURE = 'ADD_FAILURE';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETE_FAILURE = 'DELETE_FAILURE';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAILURE = 'UPDATE_FAILURE';

export const updateFriends = () => (dispatch) => {
    dispatch({ type: UPDATING });
    axios('http://localhost:5000/api/friends')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_FAILURE, payload: err }));
}

export const addFriend = (friend) => (dispatch) => {
    dispatch({ type: UPDATING });
    axios.post('http://localhost:5000/api/friends', friend)
        .then(res => dispatch({ type: ADD_FRIEND, payload: res.data }))
        .catch(err => dispatch({ type: ADD_FAILURE, payload: err }));
}

export const deleteFriend = id => dispatch => {
    dispatch({ type: UPDATING });
    axios.delete(`http://localhost:5000/api/friends/${id}`)
        .then(res => dispatch({ type: DELETE_FRIEND, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_FAILURE, payload: err }));
}

export const updateFriend = (friend, id) => dispatch => {
    dispatch({ type: UPDATING });
    axios.put(`http://localhost:5000/api/friends/${id}`, friend)
        .then(res => (dispatch({ type: UPDATE_SUCCESS, payload: res.data })))
        .catch(err => dispatch({ type: UPDATE_FAILURE, payload: err }));
}