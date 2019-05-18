import axios from 'axios'
import AxiosWithAuth from '../components/AxiosWithAuth'

export const LOGGING_START = 'LOGGING_START'
export const LOGGING_FAILURE = 'LOGGING_FAILURE'
export const LOGGING_SUCCESS = 'LOGGING_SUCCESS'

export const loggingStart = (credentials) => dispatch => {


    dispatch({type: LOGGING_START});
    return axios
        .post("http://localhost:5000/api/login", credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload)
            dispatch({type: LOGGING_SUCCESS}  );  
            }
        )
        .catch(err => {
            dispatch({type: LOGGING_FAILURE, payload: err})
        })

}

export const GETTING_FRIENDS_START = 'GETTING_FRIENDS_START';
export const GETTING_FRIENDS_SUCCESS = 'GETTING_FRIENDS_SUCCESS'
export const GETTING_FRIENDS_FAILURE = 'GETTING_FRIENDS_FAILURE'

export const getFriends = () => dispatch => {
    dispatch({type: GETTING_FRIENDS_START});
    AxiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => dispatch({type: GETTING_FRIENDS_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: GETTING_FRIENDS_FAILURE, payload: err}))
}