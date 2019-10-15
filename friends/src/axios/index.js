import axios from 'axios';

export default function withAuth() {
    const authorization = localStorage.getItem('authorization');

    const instance = axios.create({
        headers: {
            'Content-Type': 'application/json',
            Authorization: authorization,
        },
    });

    return instance;
}