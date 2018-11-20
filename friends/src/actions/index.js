import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const SAVING = "SAVING";
export const SAVED = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED = "UPDATED";
export const DELETING = "DELETING";
export const DELETED = "DELETED";
export const ERROR = "ERROR";

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCHING});

    axios   
        .get()
        .then(res => {
            dispatch({ type: FETCHED, friends: res.data.results});
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: 'Hell to the naw'})
        })
}