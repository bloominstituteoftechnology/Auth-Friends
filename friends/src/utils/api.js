import axios from 'axios'

export function getToken() {
    return localStorage.getItem('token')
}

export default function() {
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: {
            Authorization: getToken(),
        }
    })
}

// Authorization is like a key to the header. Header holds it's own key:value pairs. Header is where we hold the localStorage token.