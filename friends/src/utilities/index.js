import axios from 'axios';
export const axiosWithAuth = () => {
    const token = JSON.parse(localStorage.getItem('user')).token;

    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });
}

export const addTokenToLocalStorage = store => next => action => {
    if (action.type === 'LOGIN_SUCCESS') {
        localStorage.setItem('user', JSON.stringify(action.payload))
    }
    next(action);
}