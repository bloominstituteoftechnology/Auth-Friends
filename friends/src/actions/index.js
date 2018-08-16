import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";

export const fetchFriends = () => {
    return function(dispatch) {
        dispatch({ type: FETCHING });
        axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
}