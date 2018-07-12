import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";


export const fetchFriends = () => {
    const friendData = axios.get("http://localhost:5000/api/friends");
    return function(dispatch) {
        dispatch({ type: FETCHING });
        friendData.then(({data}) => {
            console.log(data)
            dispatch({type: FETCHED, payload: data});
        })
        .catch(error => {
            dispatch({type: ERROR})
        })
    }
}
