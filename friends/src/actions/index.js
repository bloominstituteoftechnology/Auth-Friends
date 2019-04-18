import axios from 'axios';
export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const FRIENDS_START = 'FRIENDS_START'
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS'
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE'

const baseUrl = 'http://localhost:5000'

export const handleLogin = state => dispatch => {
    console.log(state)
    dispatch({ type: LOGIN_START })
    axios
        .post(`${baseUrl}/api/login`, state)
        .then( res => dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })) 
        .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err}))
};

export const handleGetFriends = token => dispatch => {
    // console.log('clicked handleGetFriends')
    dispatch({ type: FRIENDS_START })
    axios
        .get(`${baseUrl}/api/friends`,  { headers: { authorization: token }})
        .then( res =>  dispatch({ type: FRIENDS_SUCCESS, payload: res.data }))
        .catch( err => dispatch({ type: FRIENDS_FAILURE, payload: err }))
}
