import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

export const getFriends = (URL) => {
    const request = axios.get(URL);
    return function(dispatch) {
        dispatch({
            type: FETCHING,
        })
        request.then(({data}) => {
            dispatch({type: FETCHED, payload: data.results })
        })
        .catch(err => {
            dispatch({type: ERROR, error: err})
        })
    }
}