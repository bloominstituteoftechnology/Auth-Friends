import axios from 'axios'

const url = 'http://localhost:5000/api/'

//GET PICTURE FROM NASA
export const PICTURE_GET = 'PICTURE_GET'
export const PICTURE_SUCCESS = 'PICTURE_SUCCESS'
export const PICTURE_FAIL = 'PICTURE_FAIL'
export const getPicture = () => dispatch => {
    dispatch({type: PICTURE_GET})
    const day = Math.floor(Math.random() * 28) + 1
    const month = Math.floor(Math.random() * 12) + 1
    const year = Math.floor(Math.random() * 24) + 1995
    axios
        .get(
            'https://api.nasa.gov/planetary/apod?'
            + `date=${year}-${month}-${day}`
            + '&api_key=bUb5xTetHRsEG4LD9cAcvgrDyO0ejARgEaj7ScvR'
        )
        .then(res => dispatch({type: PICTURE_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: PICTURE_FAIL, payload: err}))
}

//LOGIN
export const LOGIN_POST = 'LOGIN_POST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const login = credentials => dispatch => {
    dispatch({type: LOGIN_POST})
    return axios
        .post(url + 'login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({type: LOGIN_SUCCESS, payload: res.data.payload})
            return 'success'
        })
        .catch(err => {
            dispatch({type: LOGIN_FAIL, payload: err})
            return 'fail'
        })
}

//CHECK AUTH
export const LOGINSTATUS_GET = 'LOGINSTATUS_GET'
export const LOGINSTATUS_SUCCESS = 'LOGINSTATUS_SUCCESS'
export const LOGINSTATUS_FAIL = 'LOGINSTATUS_FAIL'
export const loginStatus = token => dispatch => {
    dispatch({type: LOGINSTATUS_GET})
    return axios
        .get(url + 'friends/1',{headers: { Authorization: localStorage.getItem("token")}})
        .then(nil => {dispatch({type: LOGINSTATUS_SUCCESS, payload: true}); return true})
        .catch(err => {dispatch({type: LOGINSTATUS_FAIL, payload: err}); return false})
}

//ALL FRIENDS
export const FRIEND_GET_ALL = 'FRIEND_GET_ALL'
export const FRIEND_GET     = 'FRIEND_GET'
export const FRIEND_EDIT    = 'FRIEND_EDIT'
export const FRIEND_ADD     = 'FRIEND_ADD'
export const FRIEND_DELETE  = 'FRIEND_DELETE'
export const FRIEND_SUCCESS = 'FRIEND_SUCCESS'
export const FRIEND_FAIL    = 'FRIEND_FAIL'
export const add_friend = friend => dispatch => {
    dispatch({type: FRIEND_ADD})
    return axios
        .post(url + `friends`, friend, {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: FRIEND_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: FRIEND_FAIL, payload: err})})
}
export const get_friend = id => dispatch => {
    dispatch({type: FRIEND_GET})
    return axios
        .get(url + `friends/${id}`, {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: FRIEND_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: FRIEND_FAIL, payload: err})})
}
export const get_friend_all = () => dispatch => {
    dispatch({type: FRIEND_GET_ALL})
    return axios
        .get(url + 'friends', {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: FRIEND_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: FRIEND_FAIL, payload: err})})
}
export const kill_friend = id => dispatch => {
    dispatch({type: FRIEND_DELETE})
    return axios
        .delete(url + `friends/${id}`, {headers: { Authorization: localStorage.getItem("token")}})
        .then(res => {dispatch({type: FRIEND_SUCCESS, payload: res.data})})
        .catch(err => {dispatch({type: FRIEND_FAIL, payload: err})})
}