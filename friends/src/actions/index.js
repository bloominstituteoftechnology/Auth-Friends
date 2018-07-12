import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";


export const fetchFriends = () => {
    const friendData = axios.get("/api/friends");
    return function(dispatch) {
        dispatch({ type: FETCHING });
        friendData.then(({data}) => {
            dispatch({type: FETCHED, payload: data.friends)
        })
        .catch(error => {
            dispatch({type: ERROR})
        })
    }
}
};