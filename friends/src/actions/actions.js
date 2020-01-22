import { AxiosWithAuth } from '../components/AxiosWithAuth';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const GET_DATA_START = 'GET_DATA_START';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAIL = 'GET_DATA_FAIL';
export const ADD_NEW_FRIEND = 'ADD_NEW_FRIEND';
export const DELETE_LOGIN = 'DELETE_LOGIN';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_START });
        return AxiosWithAuth() 
            .post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                dispatch({ type: LOGIN_SUCCESS })
            })
            .catch(err => {
                console.log(err);
            });
};

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA_START });
    AxiosWithAuth()
        .get('/friends')
        .then(response => {
            dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: GET_DATA_FAIL, payload: error.response.error});
        });
};

export const addFriend = newFriend => {
    return {
        type: ADD_NEW_FRIEND,
        payload: newFriend
    };
};