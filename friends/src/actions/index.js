import { axiosWithAuth } from '../utils/axiosWithAuth'

export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS'
export const UPDATE_FRIEND_STATE = 'UPDATE_FRIEND_STATE'
export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAIL = 'GET_FRIENDS_FAIL'
export const POST_FRIENDS_START = 'POST_FRIENDS_START'
export const POST_FRIENDS_SUCCESS = 'POST_FRIENDS_SUCCESS'
export const POST_FRIENDS_FAIL = 'POST_FRIENDS_FAIL'
export const PUT_FRIENDS_START = 'PUT_FRIENDS_START'
export const PUT_FRIENDS_SUCCESS = 'PUT_FRIENDS_SUCCESS'
export const PUT_FRIENDS_FAIL = 'PUT_FRIENDS_FAIL'
export const DELETE_FRIENDS_START = 'DELETE_FRIENDS_START'
export const DELETE_FRIENDS_SUCCESS = 'DELETE_FRIENDS_SUCCESS'
export const DELETE_FRIENDS_FAIL = 'DELETE_FRIENDS_FAIL'

export const loggedStatus = () => {
    return dispatch => {
        dispatch({ type: UPDATE_LOGIN_STATUS })
    }
}

export const updateFriendState = (friend) => {
    return dispatch => {
        dispatch({ type: UPDATE_FRIEND_STATE, payload: friend })
    }
}

export const getFriendsList = () => {
    return dispatch => {
        dispatch({ type: GET_FRIENDS_START })
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends`)
            .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: GET_FRIENDS_FAIL, payload: err.response }))
    }
}

export const addNewFriend = (newFriend) => {
    return dispatch => {
        dispatch({ type: POST_FRIENDS_START })
        axiosWithAuth()
            .post(`http://localhost:5000/api/friends`, newFriend)
            .then(res => dispatch({ type: POST_FRIENDS_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: POST_FRIENDS_FAIL, payload: err.response }))
    }
}

export const editFriend = (editAmigo) => {
    return dispatch => {
        dispatch({ type: PUT_FRIENDS_START })
        axiosWithAuth()
            .put(`http://localhost:5000/api/friends/${editAmigo.id}`, editAmigo)
            .then(res => dispatch({ type: PUT_FRIENDS_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: PUT_FRIENDS_FAIL, payload: err.response }))
    }
}

export const removeFriend = (byeFriend) => {
    return dispatch => {
        dispatch({ type: DELETE_FRIENDS_START })
        axiosWithAuth()
            .delete(`http://localhost:5000/api/friends/${byeFriend.id}`)
            .then(res => dispatch({ type: DELETE_FRIENDS_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: DELETE_FRIENDS_FAIL, payload: err.response }))
    }
}