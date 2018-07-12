import axios from 'axios'

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const POSTING = 'POSTING';


const URL = 'http://localhost:5000/api/friends/';
export const dataFetch = () => {
    const request = axios.get(URL);
    return (dispatch) => {
        dispatch({ type: FETCHING })
        request.then(({ data }) => {
            return dispatch({ type: FETCHED, payload: data })
        })
            .catch(err => {
                return dispatch({ type: ERROR, payload: "Error fetching friends" })
            })
    }
}

export const dataPost = (friend) => {
    return (dispatch) => {
        axios
            .post(URL, friend)
            .then((response) => {
                return dispatch({ type: POSTING, payload: response.data })
            })

    }
}


