import axios from 'axios';

// This wrapper is a function that, when invoked,
// returns an axios instance that automatically
// puts the 'token' from browser's local storage
// into an 'Authorization' header of the request.

// Usage should look like: `withAuth().get('http://api.com/friends').then(etc)`

export const axiosWuthAuth = () => {
    const token = localStorage.getItem('token');

    const axiosExample = axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        }
    });
    return axiosExample;
}