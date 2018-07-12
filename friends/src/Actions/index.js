import axios from "axios"

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const POSTING = "POSTING"

export function fetch_Friends() {
    return(dispatch) => {
        dispatch({type: FETCHING})
        axios.get('http://localhost:5000/api/friends')
        .then((response) => {
            console.log('response', response.data)
            dispatch({type: FETCHED, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: "ERROR FETCHING FRIEND"})
        })
    }
}

export const post_Friend = friend => {
    return(dispatch) => {
        dispatch({type: POSTING})
        axios.post('http://localhost:5000/api/friends', friend)
        .then((response) => {
            dispatch(fetch_Friends());
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: "ERROR POSTING FRIEND"})
        })
    }
} 