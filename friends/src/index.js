import axios from 'axios';
export const IS_FETCHING = "IS_FETCHING";

export const 
    FRIENDS_FETCHED = "FRIENDS_FETCHED",
    ERROR_FETCHING_FRIENDS = "ERROR_FETCHING_FRIENDS";

export const getFriends = () => (dispatch) => {
    dispatch({ type: IS_FETCHING });

    axios
        .get(`http://localhost:5000/api/friends`)
        .then(response => { 
            dispatch({ type: FRIENDS_FETCHED, friends: response.data })
        })
        .catch(error => {
            dispatch({ type: ERROR_FETCHING_FRIENDS, payload: error });
        });
};