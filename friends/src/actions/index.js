import axios from 'axios'

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS'
export const FRIEND_FETCH_SUCCESS = 'FRIEND_FETCH_SUCCESS'
export const FRIEND_FETCH_ERROR = 'FRIEND_FETCH_ERROR'

export const ADDING_FRIEND = 'ADDING_FRIEND'
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS'
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR'

export const fetchFriends = () => {
    return dispatch => {
        dispatch({ type: FETCHING_FRIENDS })

        axios
            .get('http://localhost:5000/api/friends')
            .then(res => {
                dispatch({ type: FRIEND_FETCH_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: FRIEND_FETCH_ERROR })
            })
    }
}

export const createFriend = friend => {
    return dispatch => {
        dispatch({ type: ADDING_FRIEND })
        axios
            .post('http://localhost:5000/api/friends', friend)
            .then(res =>
                dispatch({
                    type: ADD_FRIEND_SUCCESS,
                    payload: res.data,
                })
            )
            .catch(err => {
                console.log(err)
                dispatch({ type: ADD_FRIEND_ERROR })
            })
    }
}
