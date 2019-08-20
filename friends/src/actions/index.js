import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_FRIENDS_START = 'GET_FRIENDS_START'
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS'
export const GET_FRIENDS_FAIL = 'GET_FRIENDS_FAIL'

export const getFriendsList = () => {
    return dispatch => {
        dispatch({ type: GET_FRIENDS_START })
        axiosWithAuth()
            .get(`http://localhost:5000/api/friends`)
            .then(res => dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data }))
            .catch(err => dispatch({ type: GET_FRIENDS_FAIL, payload: err.response }))
    }
}