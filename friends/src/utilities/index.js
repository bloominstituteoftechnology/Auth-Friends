import axios from 'axios';
export const axiosWithAuth = () => {
    const token = localStorage.getItem('userToken');

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
}

export const addTokenToLocalStorage = store => next => action => {
    if (action.type === 'LOGIN_SUCCESS') {
        localStorage.setItem('userToken', action.payload.token)
    }
    next(action);
}