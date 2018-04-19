import axios from "axios"

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export function fetch_Friends() {
    return(dispatch) => {
        dispatch({type: FETCHING})
        axios.get('http://localhost:5000/api/friends')
        .then((response) => {
            console.log('response', response.data)
            dispatch({type: FETCHED, payload: response.data})
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        })
    }
}